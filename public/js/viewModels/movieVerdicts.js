/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
/*
 * Your dashboard ViewModel code goes here
 */
define(['ojs/ojcore', 'knockout', 'jquery','ojs/ojknockout', 'promise', 'ojs/ojlistview',
        'ojs/ojcollectiontabledatasource', 'ojs/ojmodel', 'ojs/ojgauge', 'ojs/ojdatetimepicker'],
    function(oj, ko, $) {
  
        function DashboardViewModel() {
            var self = this;
            self.dataSource = ko.observable();
            self.currentItem = ko.observable();
            // for date fields
            var dateOptions = {pattern: 'dd-MMM-yyyy'};
            var dateConverter =
                oj.Validation.converterFactory("datetime").createConverter(dateOptions);
            var model = oj.Model.extend({
                idAttribute: 'id',
                parse: parseMovie,
            });

            var collection = new oj.Collection(null, {
                url: getBaseUrl(),
                fetchSize: 15,
                model: model
            });

            self.dataSource(new oj.CollectionTableDataSource(collection));
            // Below are a subset of the ViewModel methods invoked by the ojModule binding
            // Please reference the ojModule jsDoc for additional available methods.

            /**
             * Optional ViewModel method invoked when this ViewModel is about to be
             * used for the View transition.  The application can put data fetch logic
             * here that can return a Promise which will delay the handleAttached function
             * call below until the Promise is resolved.
             * @param {Object} info - An object with the following key-value pairs:
             * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
             * @param {Function} info.valueAccessor - The binding's value accessor.
             * @return {Promise|undefined} - If the callback returns a Promise, the next phase (attaching DOM) will be delayed until
             * the promise is resolved
             */
            self.handleActivated = function(info) {
                // Implement if needed
            };

            /**
             * Optional ViewModel method invoked after the View is inserted into the
             * document DOM.  The application can put logic that requires the DOM being
             * attached here.
             * @param {Object} info - An object with the following key-value pairs:
             * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
             * @param {Function} info.valueAccessor - The binding's value accessor.
             * @param {boolean} info.fromCache - A boolean indicating whether the module was retrieved from cache.
             */
            self.handleAttached = function(info) {
                // Implement if needed
            };


            /**
             * Optional ViewModel method invoked after the bindings are applied on this View.
             * If the current View is retrieved from cache, the bindings will not be re-applied
             * and this callback will not be invoked.
             * @param {Object} info - An object with the following key-value pairs:
             * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
             * @param {Function} info.valueAccessor - The binding's value accessor.
             */
            self.handleBindingsApplied = function(info) {
                // Implement if needed
            };

            /*
             * Optional ViewModel method invoked after the View is removed from the
             * document DOM.
             * @param {Object} info - An object with the following key-value pairs:
             * @param {Node} info.element - DOM element or where the binding is attached. This may be a 'virtual' element (comment node).
             * @param {Function} info.valueAccessor - The binding's value accessor.
             * @param {Array} info.cachedNodes - An Array containing cached nodes for the View if the cache is enabled.
             */
            self.handleDetached = function(info) {
                // Implement if needed
            };

            function parseMovie(response) {
                var today = new Date();
                var rating = response['rating'] || 0;
                var ratingInt = ko.observable(rating);
                return {id: response['id'],
                    title: response['title'],
                    rating: response['rating'],
                    image: response['image'],
                    ratingInt : ratingInt,
                    ratingStr: ko.computed(function() {
                        return ratingInt() > 0 ? 'Rating ' + ratingInt() : 'Not Rated';
                    }),
                    released: isReleasedBefore(response['releaseDate'], today),
                    releaseDate: dateConverter.format(response['releaseDate'])};
            };

            function isReleasedBefore(releaseDate, today) {
                return (new Date(releaseDate).getTime()) <= today.getTime();
            };

            function getBaseUrl() {
                return window.location + 'movies/'
            };

            self.getCurrentItem = function(data) {
                self.currentItem(data);
            };

            self.updateRating = function(event) {
                var url = getBaseUrl() + self.currentItem().id;
                var data = self.currentItem();
                $.ajax({
                    url: url,
                    type: 'PATCH',
                    contentType: "application/json",
                    data: JSON.stringify({id:data.id, rating: data.ratingInt()}),
                }).done(function(data) {
                    // do nothing
                }).fail(function(jqXHR, textStatus, errorThrown) {
                    // for failure case
                    alert(jqXHR.responseText);
                });
            }
        }

        /*
         * Returns a constructor for the ViewModel so that the ViewModel is constructed
         * each time the view is displayed.  Return an instance of the ViewModel if
         * only one instance of the ViewModel is needed.
         */
        return new DashboardViewModel();
    }
);
