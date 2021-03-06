/**
 * Copyright (c) 2014, 2017, Oracle and/or its affiliates.
 * The Universal Permissive License (UPL), Version 1.0
 */
"use strict";
define(['ojs/ojcore', 'jquery', 'ojs/ojcomponentcore','ojs/ojbutton','ojs/ojmenu','ojs/ojlistview'], 
       function(oj, $)
{

/**
 * Handler for Expanded Navigation List
 * @constructor
 * @ignore
 */
oj.DefaultNavListHandler = function (widget, root, component) {
  this.m_widget = widget;
  this.m_root = root;
  this.m_component = component;
  if(this.m_widget.GetOption(this.m_widget.OPTION_EDGE) === this.m_widget.OPTION_EDGE_END){
    this.m_root.addClass(this.m_widget.getNavListEndEdgeStyleClass());
  }
};
/**
 * Restore Listview element
 * @private
 */
oj.DefaultNavListHandler.prototype.Destroy = function () {
  this.m_root.removeClass(this.m_widget.getNavListExpandedStyleClass())
              .removeClass(this.m_widget.getNavListVerticalStyleClass())
              .removeClass(this.m_widget.getNavListEndEdgeStyleClass());
};
/**
 * Expand group Item
 * @param {jQuery} groupItem  Group Item
 * @param {boolean} animate true if animate the expand operation, false otherwise
 * @param {Event} event the event that triggers expand.  Note that event could be null in the case where this is programmatically done by the widget
 * @return {Promise} A Promise that resolves when expand animation completes
 * @private
 */
oj.DefaultNavListHandler.prototype.Expand = function (groupItem, animate, event) {
  return Promise.resolve(null);
};

/**
 * Collapse group Item
 * @param {jQuery} item  Group Item
 * @param {Object} key key of Group item
 * @param {boolean} animate true if animate the collapse operation, false otherwise
 * @param {Event} event the event that triggers collapse.  Note that event could be null in the case where this is programmatically done by the widget
 * @return {Promise} A Promise that resolves when collapse animation completes
 * @private
 */
oj.DefaultNavListHandler.prototype.Collapse = function (item, key, animate, event) {
  return Promise.resolve(null);
};

/**
 * Handle keyboard events for expand and collapse
 * @private
 */
oj.DefaultNavListHandler.prototype.HandleExpandAndCollapseKeys = function (event, keyCode, current, currentItemKey) {
  return false;
};

/**
 * Mofify List item
 * @private
 */
oj.DefaultNavListHandler.prototype.ModifyListItem = function ($item, itemContent) {
  //Do nothing
};

/**
 * Update aria properties when an item is selected.
 * @private
 */
oj.DefaultNavListHandler.prototype.UpdateAriaPropertiesOnSelectedItem = function (elem, highlight) {
  elem.attr("aria-selected", highlight ? 'true' : 'false');
};

/**
 * Placeholder to override or update generated dom after completing rendering
 * @private
 */
oj.DefaultNavListHandler.prototype.BeforeRenderComplete = function () {
  var role = this.m_widget.element.attr("role"),
      roleOnRootNode = this.m_root.attr("role");
  if( role && role != "presentaion" && !roleOnRootNode ) {
    this.m_widget.element.attr('role','presentation');
    this.m_root.attr("role", role);
  }
};
/**
 * Called by content handler once the content of an item is rendered triggered by an insert event
 * @param {Element} elem the item element
 * @param {Object} context the context object used for the item
 * @private
 */
oj.DefaultNavListHandler.prototype.ItemInsertComplete = function (elem, context) {

};

/**
 * Called by content handler once the content of an item is removed triggered by an remove event
 * @param {Element} elem the item element
 * @private
 */
oj.DefaultNavListHandler.prototype.ItemRemoveComplete = function (elem) {

};
/**
 * Handles arrow keys navigation on item
 * @param {number} keyCode description
 * @param {boolean} isExtend
 * @param {Event} event the DOM event causing the arrow keys
 * @private
 */
oj.DefaultNavListHandler.prototype.HandleArrowKeys = function (keyCode, isExtend, event) {
  return _ojNavigationListView.superclass.HandleArrowKeys.apply(this.m_widget, arguments);
};

/**
 * Determine whether the key code is an arrow key
 * @param {number} keyCode
 * @return {boolean} true if it's an arrow key, false otherwise
 * @private
 */
oj.DefaultNavListHandler.prototype.IsArrowKey = function (keyCode) {
  return _ojNavigationListView.superclass.IsArrowKey.apply(this.m_widget, arguments);
};
/**
 * Determines whether the specified item is expanded
 * @param {jQuery} item the item element
 * @return {number} 0 if item is expanded, 1 if item is collapsed, 2 if item cannot be expand or collapse.
 * @private
 */
oj.DefaultNavListHandler.prototype.GetState = function (item) {
  return _ojNavigationListView.superclass.GetState.apply(this.m_widget, arguments);
};
/**
 * Sets the disclosed state of the item
 * @param {jQuery} item the item element
 * @param {number} state 0 if item is expanded, 1 if item is collapsed, 2 if item cannot be expand or collapse.
 * @private
 */
oj.DefaultNavListHandler.prototype.SetState = function (item, state) {
  _ojNavigationListView.superclass.SetState.apply(this.m_widget, arguments);
};

oj.DefaultNavListHandler.prototype.Init = function (opts) {
  this.m_root.addClass(this.m_widget.getNavListExpandedStyleClass())
              .addClass(this.m_widget.getNavListVerticalStyleClass());
};

/**
 * Check whether the item is selectable
 * @param {Element} item the item element
 * @return {boolean} true if item is selectable
 * @private
 */
oj.DefaultNavListHandler.prototype.IsSelectable = function (item) {
  return _ojNavigationListView.superclass.IsSelectable.apply(this.m_widget, arguments);
};

/**
 * Restore Item
 * @param {jQuery} item, List item
 * @param {jQuery} itemContent, Item contentelement
 * @param {jQuery} sublist, sub list when item is a group item.
 * @private
 */
oj.DefaultNavListHandler.prototype.RestoreItem = function (item, itemContent, sublist) {

};

/**
 * Invoked when an option was updated after component initialization.
 * Note: This will be invoked only for specifc options. see setOptions method in NavigationList.js.
 * @private
 */
oj.DefaultNavListHandler.prototype.SetOptions = function (options) {
  //DO Nothing
};

/**
 * Handler for blur event
 * @param {Event} event the blur event
 * @protected
 */
oj.DefaultNavListHandler.prototype.HandleBlur = function(event)
{
  return _ojNavigationListView.superclass.HandleBlur.apply(this.m_widget, arguments);
};
/**
 * Handler for focus event
 * @param {Event} event the focus event
 * @protected
 */
oj.DefaultNavListHandler.prototype.HandleFocus = function(event)
{
  return _ojNavigationListView.superclass.HandleFocus.apply(this.m_widget, arguments);
};

/**
 * Return node for the given subid
 * @param {Object} locator
 * @protected
 */
oj.DefaultNavListHandler.prototype.GetNodeBySubId = function (locator) {
  return null;
};

/**
 * Return subid for the given node
 * @param {Element} node
 * @protected
 */
oj.DefaultNavListHandler.prototype.GetSubIdByNode = function (node) {
  return null;
};

/**
 * Handle resize event
 * @param {number} width
 * @param {number} height
 * @protected
 */
oj.DefaultNavListHandler.prototype.HandleResize = function (width, height) {

};

/**
 * Invoked when root node is attached
 * @protected
 */
oj.DefaultNavListHandler.prototype.NotifyAttached = function () {

};

/**
 * Return subid for the given node
 * @param {string} action
 * @protected
 */
oj.DefaultNavListHandler.prototype.GetAnimationEffect = function (action) {
  return _ojNavigationListView.superclass.getAnimationEffect.apply(this.m_widget, arguments);
};

/**
 * Return true if option update allowed.
 * @protected
 */
oj.DefaultNavListHandler.prototype.IsOptionUpdateAllowed = function (key, value, flags) {
  return true;
}

/**
 * Triggered when an option is updated
 * @protected
 */
oj.DefaultNavListHandler.prototype.OptionUpdated = function(key, value, flags) {
  
}
/**
 * Handler for Horizontal Navigation List
 * @constructor
 * @extends oj.DefaultNavListHandler
 * @ignore
 */

oj.HorizontalNavListHandler = function (widget, root, component) {
  oj.HorizontalNavListHandler.superclass.constructor.call(this, widget, root, component);
  if(this.m_widget.GetOption(this.m_widget.OPTION_EDGE) === this.m_widget.OPTION_EDGE_BOTTOM){
    this.m_root.addClass(this.m_widget.getNavListBottomEdgeStyleClass());
  }
};

// Subclass from oj.Object
oj.Object.createSubclass(oj.HorizontalNavListHandler, oj.DefaultNavListHandler, "oj.HorizontalNavListHandler");

oj.HorizontalNavListHandler.prototype.Destroy = function () {

  this.m_root.removeClass(this.m_widget.getNavListExpandedStyleClass())
            .removeClass(this.m_widget.getHorizontalNavListStyleClass())
            .removeClass(this.m_widget.getNavListBottomEdgeStyleClass());
  this.m_root.find('.' + this.m_widget.getDividerStyleClass()).remove();
  
  this.m_widget.ojContext._off(this.m_widget.ojContext.element, '.overflow');
  this._destroyOverflowMenu();
  
  if(this.m_overflowMenuItem != null) {
    this.m_overflowMenuItem.remove();
    this.m_overflowMenuItem = null;  
  }
  this.m_overflowMenuItems = [];
};

oj.HorizontalNavListHandler.prototype.UpdateAriaPropertiesOnSelectedItem = function (elem, highlight) {
  elem.attr('aria-pressed', highlight ? 'true' : 'false');
};

/**
 * Handles arrow keys navigation on item
 * @param {number} keyCode description
 * @param {boolean} isExtend
 * @param {Event} event the DOM event causing the arrow keys
 * @private
 */
oj.HorizontalNavListHandler.prototype.HandleArrowKeys = function (keyCode, isExtend, event) {
  //Change keyCode to reverse left/right arrow keys for rtl case.
  if (keyCode === $.ui.keyCode.LEFT) {
    keyCode = this.m_widget.isRtl() ? $.ui.keyCode.DOWN : $.ui.keyCode.UP;
  } else if (keyCode === $.ui.keyCode.RIGHT) {
    keyCode = this.m_widget.isRtl() ? $.ui.keyCode.UP : $.ui.keyCode.DOWN;
  }

  var processed = _ojNavigationListView.superclass.HandleArrowKeys.call(this.m_widget, keyCode, isExtend, event);
    var current = this.m_widget.m_active['elem'];
    current[0].scrollIntoView(false);
  return processed;
};

/**
 *
 * @param {number} keyCode
 * @return {boolean}
 * @private
 */
oj.HorizontalNavListHandler.prototype.IsArrowKey = function (keyCode) {
  return (keyCode === this.m_widget.UP_KEY || 
          keyCode === this.m_widget.DOWN_KEY || 
          keyCode === this.m_widget.LEFT_KEY || 
          keyCode === this.m_widget.RIGHT_KEY);
};

oj.HorizontalNavListHandler.prototype.ModifyListItem = function ($item, itemContent) {
  var focusableElement = this.m_widget.getSingleFocusableElement($item);
  focusableElement.attr('role', 'button');
  if (focusableElement[0].hasAttribute('aria-selected')) {
    focusableElement.attr('aria-pressed', 'false');
    focusableElement.removeAttr('aria-selected');
  }
};

oj.HorizontalNavListHandler.prototype.BeforeRenderComplete = function () {
  var self = this;
  this.m_root.attr('role', 'toolbar');
  this.m_widget.element.attr('role','presentation');
  this.m_widget.element.find('.' + this.m_widget.getItemElementStyleClass() + ':visible').each(function (index) {
    if (index > 0) {
      self._addSeparator(this, index);
    }
  });
  
  this._handleOverflow();
};

oj.HorizontalNavListHandler.prototype._addSeparator = function (elem, index) {
  var $elem = $(elem);
  var previousElement = $elem.prev();
  if (index > 0 && previousElement.length && !previousElement.is("li." + this.m_widget.getDividerStyleClass())) {
    $elem.before('<li role="separator" class="' + this.m_widget.getDividerStyleClass() + '"></li>'); //@HTMLUpdateOK
  }
};

oj.HorizontalNavListHandler.prototype.ItemInsertComplete = function (elem, context) {
  this._addSeparator(elem, context.index);
  this._handleOverflow();
};

oj.HorizontalNavListHandler.prototype.ItemRemoveComplete = function (elem) {
  var $elem = $(elem),
    previousElement = $elem.prev();
  if (previousElement.length && previousElement.is("li." + this.m_widget.getDividerStyleClass())) {
    previousElement.remove();
  } else {
    // Means,this could be the first element,
    //so ensure that divider is not present on next element which is going to be the first one.
    //This is needed because when complete observable array is updated with new set of records, first new records will be added before removing old ones.
    var nextElement = $elem.next();
    if (nextElement.is("li." + this.m_widget.getDividerStyleClass())) {
      nextElement.remove();
    }
  }
  this._handleOverflow();
};

oj.HorizontalNavListHandler.prototype.IsSelectable = function (item) {
  return (!(this.m_overflowMenuItem && this.m_overflowMenuItem[0] === $(item)[0]) && 
            this.m_widget.getFocusItem($(item))[0].hasAttribute("aria-pressed"));
};

oj.HorizontalNavListHandler.prototype.Init = function(opts) {
  var self = this;
  this.m_root.addClass(this.m_widget.getNavListExpandedStyleClass())
            .addClass(this.m_widget.getHorizontalNavListStyleClass());
  this.m_widget.ojContext._on(this.m_widget.ojContext.element, {
    "click" : function(event) {
      if($(event.target).closest("." + self.m_widget.getOverflowItemStyleClass() + " a." + self.m_widget.getItemContentStyleClass()).length > 0) {
        self._launchOverflowMenu(event);
      }
    },
    "keydown" : function(event) {
      if($(event.target).closest("." + self.m_widget.getOverflowItemStyleClass() + " a." + self.m_widget.getItemContentStyleClass()).length > 0) {
        if (event.keyCode === $.ui.keyCode.SPACE) {
          self._launchOverflowMenu(event);
        }  
      }
    }
  });

  this.m_overflowMenuItems = [];
};

oj.HorizontalNavListHandler.prototype.NotifyAttached = function() {
  this._handleOverflow();
};

oj.HorizontalNavListHandler.prototype.HandleResize = function(width, height) {
  this._handleOverflow();
};

oj.HorizontalNavListHandler.prototype.SetOptions = function(options) {
  var currentOverflow = this.m_widget.GetOption('overflow');
  if (options['overflow'] && currentOverflow !== options['overflow']) {
    this._handleOverflow(options['overflow']);
  }
};

oj.HorizontalNavListHandler.prototype.GetAnimationEffect = function(action) {
  if (action === 'add' ||
    action === 'remove') {
    return _ojNavigationListView.superclass.getAnimationEffect.call(this.m_widget, action + 'HorizontalItem');
  }
  return _ojNavigationListView.superclass.getAnimationEffect.apply(this.m_widget, arguments);
};

oj.HorizontalNavListHandler.prototype.GetNodeBySubId = function(locator) {
  var key,
    item = null,
    subId = locator['subId'],
    overflowMenu,
    menuItems,
    index;

  if (subId === this.m_widget.getItemSubIdKey() && this.m_overflowMenuItems.length > 0) {
    overflowMenu = this._getOverflowMenu();
    key = locator['key'];
    menuItems = overflowMenu.find('.oj-menu-item');

    for (index = 0; index < menuItems.length; index++) {
      if (this.m_widget.compareValues($(menuItems[index]).data('key'),key)) {
        item = menuItems[index];
        this._launchOverflowMenu(null);
        break;
      }
    }
  }
  return item;
};

oj.HorizontalNavListHandler.prototype.GetSubIdByNode = function(node) {
  var subId = null, key, item;
  item = $(node).closest(".oj-menu-item");

  if (this._getOverflowMenu() !== null && item.closest('.' + this.m_widget.getOverflowMenuStyleClass())[0] !== this._getOverflowMenu()[0]) {
    return null;
  }

  if (item != null && item.length > 0) {
    key = item.data('key');
    if (key != null) {
      subId = {
        'subId': this.m_widget.getItemSubIdKey(),
        'key': key
      };
    }
  }
  return subId;
};

oj.HorizontalNavListHandler.prototype.OptionUpdated = function(key, value, flags) {
  if (key === "selection") {
    this._toggleOverflowBtnSelection(value);
  }
}

oj.HorizontalNavListHandler.prototype.IsOptionUpdateAllowed = function(key, value, flags) {
    if (key === 'currentItem') {
      if (this.m_overflowMenuItem && this.m_overflowMenuItem.attr('id') === value) {
        //ignore as this happens only for navigationlist more item and 
        //we should not change currentItem
        return false;
      }
    }
    return true;
  }
  /**
   * Handle overflow.
   * @param {string=} overflow optional overflow behaviour, if not specified component overflow option will be used.
   */
oj.HorizontalNavListHandler.prototype._handleOverflow = function(overflow) {
  var threshold = -1;
  if (!overflow) {
    overflow = this.m_widget.GetOption('overflow');
  }

  if (overflow === "popup") {
    threshold = this._calculateThreshold();
  }
  this._applyThreshold(threshold);
};

oj.HorizontalNavListHandler.prototype._isOverflowed = function(containerEdge, itemEdge, overflowItemWidth) {
  var isLtr = oj.DomUtils.getReadingDirection() === 'ltr';
  overflowItemWidth = overflowItemWidth ? overflowItemWidth : 0;
  if (isLtr) {
    //Even after using edge position, some times there is a fraction of pixel
    //difference which is being considered as overflow, so having 0.1 as buffer.
    return (itemEdge - containerEdge + overflowItemWidth) > 0.1;
  } else {
    return (containerEdge - itemEdge + overflowItemWidth) > 0.1;
  }
};

oj.HorizontalNavListHandler.prototype._calculateThreshold = function() {
  var container,
    edge,
    edgePosition,
    items,
    item,
    itemEdge,
    index,
    threshold,
    overflowItemWidth,
    isLtr,
    self = this;

  container = this.m_widget.getRootElement()[0];
  isLtr = oj.DomUtils.getReadingDirection() === 'ltr';
  edge = isLtr ? 'right' : 'left';
  items = this._getItems();
  threshold = -1;

  if (items.length === 0) {
    return threshold;
  }
  
  //showing all items including overflow item before invoking getBoundingClientRect to avoid browser reflows.
  this._showOrHideItem(this._getOverflowMenuButton(), true);
  items.each(function(index, item) {
    self._showOrHideItem($(item), true);
  });

  edgePosition = container.getBoundingClientRect()[edge];
  overflowItemWidth = this._getOverflowMenuButton()[0].getBoundingClientRect()['width'];

  item = items.last();
  itemEdge = item[0].getBoundingClientRect()[edge];
  index = items.length - 1;
  //check whether oveflow exists with out including overflow item
  if (this._isOverflowed(edgePosition, itemEdge, 0)) {
    //Need to check for overflow including overflow item to avoid overflow item truncation.
    while (this._isOverflowed(edgePosition, itemEdge, overflowItemWidth) && index > 0) {
      index = index - 1;
      itemEdge = items[index].getBoundingClientRect()[edge];
    }

    threshold = index + 1;
  }
  return threshold;
};

oj.HorizontalNavListHandler.prototype._getItems = function() {
  return this.m_root.find("." + this.m_widget.getItemElementStyleClass() + ":not(." + this.m_widget.getOverflowItemStyleClass() + ")");
};

oj.HorizontalNavListHandler.prototype._hasSeparators = function() {
  return this.m_root.hasClass(this.m_widget.getNavListItemsDividerStyleClass());
};

oj.HorizontalNavListHandler.prototype._showOrHideItem = function(item, show) {
  var separator;
  if (this._hasSeparators()) {
    separator = item.prev('.' + this.m_widget.getDividerStyleClass());
  }
  if (show) {
    item.show();
    if (separator) {
      separator.show(); //show separator when hiding overflow item
    }
  } else {
    item.hide();
    if (separator) {
      separator.hide(); //hide separator when hiding item
    }

  }
};

oj.HorizontalNavListHandler.prototype._applyThreshold = function(threshold) {
  var self = this,
    items = this._getItems(),
    overflowMenuData,
    overflowMenuDataArray = [],
    lastVisibleChild,
    isOverflowItemVisible,
    isOverflowMenuVisible;

  if (items.length === 0) {
    return;
  }

  this.m_root.find('.' + this.m_widget.getLastItemStyleClass())
    .removeClass(this.m_widget.getLastItemStyleClass());

  if (threshold === -1 || threshold >= items.length) {
    if(this.m_overflowMenuItem) { //if overflow item is already added need to hide it
      this._showOrHideItem(this.m_overflowMenuItem, false);
    }
  } else {
    // As listview always inserts item using index means it will insert new item before index+1 item
    // some time it is possible that new item is inserted between overflow item  and it's separator, 
    // so ensuring that separator is added if it's not already there.
    this._addSeparator(this._getOverflowMenuButton(), items.length);  

    this._showOrHideItem(this._getOverflowMenuButton(), true);
    isOverflowItemVisible = true;
  }

  items.each(function(index, item) {
    var $item = $(item);
    if (threshold !== -1 && threshold <= index) {
      if ($item.hasClass('oj-focus')) {
        self.m_widget.ActiveAndFocus(self._getOverflowMenuButton(), null);
      }

      self._showOrHideItem($item, false);
      overflowMenuData = {};
      overflowMenuDataArray.push(overflowMenuData);
      overflowMenuData["key"] = self.m_widget.GetKey(item);
      overflowMenuData["label"] = self._getItemLabel($item);
      if ($item.hasClass("oj-disabled")) {
        overflowMenuData["disabled"] = true;
      }
    } else {
      lastVisibleChild = $item;
      self._showOrHideItem($item, true);
      if (self.m_overflowMenuItem && self.m_overflowMenuItem.hasClass('oj-focus') &&
        self.m_widget.compareValues(self.m_widget.GetKey(item), self.m_widget.GetOption('currentItem'))) {
        self.m_widget.ActiveAndFocus(lastVisibleChild, null);
      }
    }
  });

  if (isOverflowItemVisible) {
    this._getOverflowMenuButton().addClass(this.m_widget.getLastItemStyleClass());
  } else {
    lastVisibleChild.addClass(this.m_widget.getLastItemStyleClass());
  }



  this.m_overflowMenuItems = overflowMenuDataArray;
  this.m_widget.ClearCache();

  isOverflowMenuVisible = this.m_overflowMenu && this.m_overflowMenu.is(':visible');
  this._destroyOverflowMenu();
  
  //launching sheetmenu some times make scrollbars visible which is triggering resize event.
  // So relaunching menu if it is already launched. 
  if (isOverflowMenuVisible) {
    this._launchOverflowMenu(null);
  }

};

oj.HorizontalNavListHandler.prototype._destroyOverflowMenu = function() {
  if (this.m_overflowMenu) {
    this.m_overflowMenu.ojMenu('destroy');
    this.m_overflowMenu.remove();
    this.m_overflowMenu = null;
  }
};

oj.HorizontalNavListHandler.prototype._getOverflowMenuButton = function() {
  var anchorElement,
    labelElement,
    iconElement,
    overflowMenuItem,
    items,
    lastItem;
  if (!this.m_overflowMenuItem) {
    overflowMenuItem = $(document.createElement('li'));
    anchorElement = $(document.createElement('a'));
    labelElement = $(document.createElement('span'));
    iconElement = $(document.createElement('span'));
    items = this._getItems();
    overflowMenuItem.uniqueId()
      .attr('role', 'presentation')
      .addClass(this.m_widget.getItemElementStyleClass())
      .addClass(this.m_widget.getItemStyleClass())
      .addClass(this.m_widget.getOverflowItemStyleClass())
      .addClass('oj-default')
      .append(anchorElement);// @HTMLUpdateOK constructed by component and not using string passed through any API
    anchorElement.addClass(this.m_widget.getFocusedElementStyleClass())
      .addClass(this.m_widget.getItemContentStyleClass());
    anchorElement.attr('role', 'button')
      .attr('aria-haspopup', 'true')
      .attr('aria-pressed', 'false')
      .attr('tabindex', '-1')
      .attr('data-tabmod', '-1')
      .attr('href', '#')
      .append(iconElement)// @HTMLUpdateOK constructed by component and not using string passed through any API
      .append(labelElement);// @HTMLUpdateOK label text is read from resource bundle and it was properly escaped

    if (!this.m_root.find('ul:first').hasClass(this.m_widget.getHasIconsStyleClass())) {
      anchorElement.addClass(this.m_widget.getHasNoIconStyleClass());
    }

    labelElement.text(this.m_widget.ojContext.getTranslatedString('overflowItemLabel')) // @HTMLUpdateOK
      .addClass(this.m_widget.getItemLabelStyleClass());

    iconElement.addClass(this.m_widget.getItemIconStyleClass())
      .addClass("oj-fwk-icon")
      .addClass(this.m_widget.getOverflowItemIconStyleClass());

    overflowMenuItem[0].key = overflowMenuItem.attr('id');
    this.m_root.find('.'+this.m_widget.GetStyleClass()).append(overflowMenuItem);// @HTMLUpdateOK constructed by component and not using string passed through any API
    this._addSeparator(overflowMenuItem, items.length);
    this.m_overflowMenuItem = overflowMenuItem;
  }
  return this.m_overflowMenuItem;
};

oj.HorizontalNavListHandler.prototype._getOverflowMenu = function() {
  var self = this,
    data = this.m_overflowMenuItems,
    menuListItem,
    menuItem,
    i,
    overflowMenu;

  if (data.length === 0) {
    return null;
  }

  if (!this.m_overflowMenu) {
    overflowMenu = $(document.createElement('ul'));
    overflowMenu.addClass(this.m_widget.getOverflowMenuStyleClass()).hide()
    this.m_root.append(overflowMenu);// @HTMLUpdateOK constructed by component and not using string passed through any API

    // create menu markup
    for (i = 0; i < data.length; i++) {
      menuListItem = $(document.createElement('li'));
      menuItem = $(document.createElement('a'));

      menuItem.attr('href', '#')
        .text(data[i]["label"]);

      menuListItem.data('key',
        data[i]["key"]);

      if (data[i]["disabled"]) {
        menuListItem.addClass('oj-disabled');
      }

      menuListItem.append(menuItem);// @HTMLUpdateOK menuItem's label text is read from dataSource and it was properly escaped 
      overflowMenu.append(menuListItem);// @HTMLUpdateOK constructed by component and not using string passed through any API
    }

    //initialize ojmenu
    overflowMenu.ojMenu({
      openOptions: {
        display: 'auto'
      },
      open: self.__handleOverflowMenuOpen.bind(self),
      close: self.__handleOverflowMenuClose.bind(self),
      select: self.__handleOverflowMenuSelection.bind(self)
    });
    this.m_overflowMenu = overflowMenu;
  }

  return this.m_overflowMenu;
};

oj.HorizontalNavListHandler.prototype._launchOverflowMenu = function(event) {
  var self = this;
  
  if(this._getOverflowMenu().is(":visible")) {
    return; //ignore if overflow menu already launched
  }
  this._getOverflowMenuButton().addClass('oj-selected').removeClass('oj-default');
  this._getOverflowMenu().ojMenu('open', event, {
    launcher: self._getOverflowMenuButton(),
    initialFocus: "firstItem",
    position: {
      "my": "end bottom",
      "at": "end top",
      "collision": "flipfit"
    }
  });
};

oj.HorizontalNavListHandler.prototype._toggleOverflowBtnSelection = function(selectedItem) {
  var overflowItemSelected, i;
  if (this.m_overflowMenuItem && this.m_overflowMenuItems.length > 0) {
    if(selectedItem) {
      for (i = 0; i < this.m_overflowMenuItems.length; i++) {
        if (this.m_widget.compareValues(this.m_overflowMenuItems[i]["key"], selectedItem)) {
          overflowItemSelected = true;
          break;
        }
      }
    }

    if (!overflowItemSelected) {
      this._getOverflowMenuButton().addClass('oj-default').removeClass('oj-selected');
    }
  }
};

oj.HorizontalNavListHandler.prototype.__handleOverflowMenuOpen = function(event, ui) {
  this._getOverflowMenuButton().find('.' + this.m_widget.getItemContentStyleClass()).attr('tabindex', '0');
};

oj.HorizontalNavListHandler.prototype.__handleOverflowMenuClose = function(event, ui) {
  var selectedItem = this.m_widget.ojContext.option('selection');
  this._toggleOverflowBtnSelection(selectedItem);
  this._getOverflowMenuButton().find('.' + this.m_widget.getItemContentStyleClass()).focus();
};

oj.HorizontalNavListHandler.prototype.__handleOverflowMenuSelection = function(event, ui) {
  var key = ui.item.data('key'),
    selectedItemKey,
    options = {
      "selection": key
    },
    item = this.m_widget.FindElementByKey(key);

  this.m_widget.HandleSelectionOption(options);
  selectedItemKey = options["selection"];
  if (selectedItemKey) {
    // trigger the optionChange event
    this.m_widget.SetOption("selection", selectedItemKey, {
      '_context': {
        originalEvent: event,
        internalSet: true,
        extraData: {
          'items': $(item)
        }
      },
      'changed': true
    });
  }
};


oj.HorizontalNavListHandler.prototype._getItemLabel = function(item) {
  var titleElement = item.find('.' + this.m_widget.getItemTitleStyleClass() + ':first');
  if (titleElement.length > 0) {
    return titleElement.text();
  } else {
    return item.find('.' + this.m_widget.getItemLabelStyleClass() + ':first').text();
  }
};

/**
 * Handler for Collapsible Navigation List
 * @constructor
 * @extends oj.DefaultNavListHandler
 * @ignore
 */
oj.CollapsibleNavListHandler = function (widget, root, component) {
  oj.CollapsibleNavListHandler.superclass.constructor.call(this, widget, root, component);
};
// Subclass from oj.Object 
oj.Object.createSubclass(oj.CollapsibleNavListHandler, oj.DefaultNavListHandler, "oj.CollapsibleNavListHandler");

oj.CollapsibleNavListHandler.prototype.Destroy = function () {
  this.m_root.removeClass(this.m_widget.getNavListCollapsibleStyleClass())
              .removeClass(this.m_widget.getNavListVerticalStyleClass());
};

oj.CollapsibleNavListHandler.prototype.Init = function (opts) {
  this.m_root.addClass(this.m_widget.getNavListCollapsibleStyleClass())
              .addClass(this.m_widget.getNavListVerticalStyleClass());
};

oj.CollapsibleNavListHandler.prototype.Expand = function (groupItem, animate, event) {
  return _ojNavigationListView.superclass.AnimateExpand.apply(this.m_widget, arguments);
};

oj.CollapsibleNavListHandler.prototype.Collapse = function (item, key, animate, event) {
  return _ojNavigationListView.superclass.AnimateCollapse.apply(this.m_widget, arguments);
};

oj.CollapsibleNavListHandler.prototype.HandleExpandAndCollapseKeys = function (event, keyCode, current, currentItemKey) {
  var isGroupItem = current.children('.' + this.m_widget.getGroupStyleClass()).length > 0;
  if (keyCode === this.m_widget.LEFT_KEY || keyCode === this.m_widget.RIGHT_KEY) {
    //Need to reverse left/right functionality  in rtl case
    if ((keyCode === this.m_widget.LEFT_KEY && !this.m_widget.isRtl()) || (keyCode === this.m_widget.RIGHT_KEY && this.m_widget.isRtl())) {
      if (this.m_widget.GetState(current) === this.m_widget.STATE_EXPANDED) {
        this.m_widget.CollapseItem(current, event, true, currentItemKey, true, true);
      }
    } else {
      if (this.m_widget.GetState(current) === this.m_widget.STATE_COLLAPSED) {
        this.m_widget.ExpandItem(current, event, true, currentItemKey, true, true, true);
      }
    }
    return true;
  }

  if (isGroupItem && (keyCode === $.ui.keyCode.ENTER || keyCode === $.ui.keyCode.SPACE)) {
    if (current.length <= 0) {
      return;
    }
    if (this.m_widget.GetState(current) === this.m_widget.STATE_COLLAPSED) {
      this.m_widget.ExpandItem(current, null, true, currentItemKey, true, true, true);
    } else if (this.m_widget.GetState(current) === this.m_widget.STATE_EXPANDED) {
      this.m_widget.CollapseItem(current, null, true, currentItemKey, true, true);
    }
    return true;
  }
  return false;
};

/**
 * Handler for Sliding Navigation List
 * @constructor
 * @extends oj.CollapsibleNavListHandler
 * @ignore
 */
oj.SlidingNavListHandler = function (widget, root, component) {
  oj.SlidingNavListHandler.superclass.constructor.call(this, widget, root, component);
  this.m_expanded = [];
};

// Subclass from oj.Object
oj.Object.createSubclass(oj.SlidingNavListHandler, oj.CollapsibleNavListHandler, "oj.SlidingNavListHandler");

oj.SlidingNavListHandler.prototype.Destroy = function () {
  this.m_root.removeClass('oj-navigationlist-slider')
              .removeClass(this.m_widget.getNavListVerticalStyleClass());
  this._toolbar.remove();
};
/**
 * Intiate Expand/collapse animation.
 *
 * @param {Object} item, item which is going to be expanded.
 * @param {boolean} isMovingNext true for expand animation and false for collapse animation.
 * @param {Object} focusableElement, focusable element after animation.
 * @param {Event} event the event that triggers sliding.  Note that event could be null in the case where this is programmatically done by the widget
 * @param {Function} animationResolve the resolve function that resolves the animation Promise
 */
oj.SlidingNavListHandler.prototype._slideAnimation = function (item, isMovingNext, focusableElement, event, animationResolve) {
  var self = this;
  var list_root = this.m_widget.getRootElement();
  var isRtl = this.m_widget.isRtl();
  var hasFocusAncestor = this.m_widget.getRootElement().hasClass("oj-focus-ancestor");
  var action, promise;

  action = isMovingNext ? "sliderExpand" : "sliderCollapse";
  promise = this.m_widget.StartAnimation(/** @type {Element} */ (list_root.get(0)), action, this.m_widget.getAnimationEffect(action));
  promise.then(function () {
    self._slideAnimationComplete(item, isMovingNext, focusableElement, event, hasFocusAncestor);
    animationResolve(null);
  });
};

/**
 * Update ui after animation.
 *
 * @param {Object} item, item which is going to be expanded.
 * @param {boolean} isMovingNext true for expand animation and false for collapse animation
 * @param {Object|null} focusableElement, focusable element after animation.
 * @param {Event} event the event that triggers sliding.  Note that event could be null in the case where this is programmatically done by the widget
 * @param {boolean} needFocusAncestor, true if oj-focus-ancestor needs to be added after slide animation.
 * @private
 */
oj.SlidingNavListHandler.prototype._slideAnimationComplete = function (item, isMovingNext, focusableElement, event, needFocusAncestor) {
  if (this.m_widget.m_contentHandler === null) {
    return;
  }

  if (focusableElement) {
    if (needFocusAncestor) {
      this.m_widget.getRootElement().addClass("oj-focus-ancestor"); // during animation oj-focus-ancestor is being removed due triggering of focusout event. probably this is due to hiding of element user clicked on.
    }
    if (event && event.button === 0) {
      this.m_widget.AvoidFocusHighLight(true);
    }
    this.m_widget.SetCurrentItem(focusableElement, event);
    this.m_widget.AvoidFocusHighLight(false);
  }
  if (!isMovingNext) {
    this.m_widget.AnimateCollapseComplete(item.children('.' + this.m_widget.getGroupStyleClass()));
  } else {
    this.m_widget.AnimateExpandComplete(item.children('.' + this.m_widget.getGroupStyleClass()));
  }
};

/**
 * Expand item in sliding navigation list
 * @param {Object} groupItem group item to be expanded
 * @param {boolean} animate flag to trigger animation or not
 * @param {Event} event the event that triggers expand.  Note that event could be null in the case where this is programmatically done by the widget
 * @return {Promise} A Promise that resolves when expand animation completes
 * @private
 */
oj.SlidingNavListHandler.prototype.Expand = function (groupItem, animate, event) {
  var animationResolve;
  var animationPromise = new Promise(function (resolve, reject) {
    animationResolve = resolve;
  });

  var target = $(groupItem).parents('.oj-navigationlist-item-element:first');
  var sublist = target.children('.' + this.m_widget.getGroupStyleClass()),
    parentLabel,
    nextFocusableItem = null;

  var currentListRoot = target.closest('.' + this.m_widget.SLIDING_NAVLIST_CURRENT_STYLE_CLASS);
  if (currentListRoot.length > 0) {
    //Move marker style class to expanded node only when it is child of an already expanded node.
    //It is possible that child is expanded before parent, in which we need should not remove marker class from child.
    //Ref , During initialization, listview expands child before parent which is causing the issue.
    currentListRoot.removeClass(this.m_widget.SLIDING_NAVLIST_CURRENT_STYLE_CLASS);
    target.addClass(this.m_widget.SLIDING_NAVLIST_CURRENT_STYLE_CLASS);
    nextFocusableItem = sublist.find('.' + this.m_widget.getItemElementStyleClass() + ':eq(0)');
    var listOfParents = target.parentsUntil(currentListRoot, 'ul');
    if (currentListRoot.is(this.m_widget.element)) {
      listOfParents = listOfParents.get().concat(currentListRoot.get());
    } else {
      listOfParents = listOfParents.get();
    }

    var self = this,
      itemNode;
    listOfParents = $(listOfParents.reverse());
    listOfParents.each(function (i, parentList) {
      if ($(parentList).is(self.m_widget.element)) {
        parentLabel = self.m_widget.getRootLabel();
      } else {
        parentLabel = self.m_widget.getItemLabel($(parentList).parent());
      }
      if (i === listOfParents.length - 1) {
        itemNode = target;
      } else {
        itemNode = $(listOfParents.get(i + 1)).parent();
      }
      self._addItemToHviewMenu(self.m_widget.GetKey(itemNode[0]), self.m_widget.getItemLabel(itemNode), parentLabel);
      // this var keeps a stack of expanded items
      self.m_expanded.push(itemNode);
    });
  }

  if (animate) {
    this._slideAnimation(target, true, nextFocusableItem, event, animationResolve);
  } else {
    this._slideAnimationComplete(target, true, nextFocusableItem, event, false);
    animationResolve(null);
  }

  //For ios, it is needed to set aria-hidden.
  target.siblings().attr('aria-hidden', 'true');
  target.children('.' + this.m_widget.getGroupItemStyleClass())
    .children('.' + this.m_widget.getItemContentStyleClass())
    .attr('aria-hidden', 'true');
  sublist.removeAttr('aria-hidden');

  // undo any display set by ListView
  groupItem.css("display", "");
  //Skip focus for group element
  target.addClass('oj-skipfocus');

  return animationPromise;
};

/**
 * Collapse item in sliding navigation list
 * @param {Object} target target list root
 * @param {Object} key the key of the group item
 * @param {boolean} animate flag to trigger animation or not
 * @param {Event} event the event that triggers collapse.  Note that event could be null in the case where this is programmatically done by the widget
 * @return {Promise} A Promise that resolves when collapse animation completes
 * @private
 */
oj.SlidingNavListHandler.prototype.Collapse = function (target, key, animate, event) {
  var animationResolve;
  var animationPromise = new Promise(function (resolve, reject) {
    animationResolve = resolve;
  });

  var currentList = target.children('.' + this.m_widget.getGroupStyleClass()),
    parentlist = target.parent();

  target.children('.' + this.m_widget.getGroupItemStyleClass())
    .children('.' + this.m_widget.getItemContentStyleClass())
    .removeAttr('aria-hidden');
  currentList.attr('aria-hidden', 'true');
  target.siblings().removeAttr('aria-hidden');

  //Enable focus for group element
  target.removeClass('oj-skipfocus');

  target.removeClass(this.m_widget.SLIDING_NAVLIST_CURRENT_STYLE_CLASS);
  //While collapsing node, if any of parent is already having current style class then don't add again
  if (target.closest('.' + this.m_widget.SLIDING_NAVLIST_CURRENT_STYLE_CLASS).length === 0) {
    parentlist.closest('.' + this.m_widget.getItemElementStyleClass()).addClass(this.m_widget.SLIDING_NAVLIST_CURRENT_STYLE_CLASS);
    if (this.m_widget.element.is(parentlist)) {
      this.m_widget.element.addClass(this.m_widget.SLIDING_NAVLIST_CURRENT_STYLE_CLASS);
    }
  }

  if (animate) {
    this._slideAnimation(target, false, currentList.parent(), event, animationResolve);
  } else {
    this._slideAnimationComplete(target, false, currentList.parent(), event, false);
    animationResolve(null);
  }

  this._removeItemFromHviewMenu();

  return animationPromise;
};

oj.SlidingNavListHandler.prototype.UpdateAriaPropertiesOnSelectedItem = function (elem, highlight) {
  if (highlight) {
    elem.attr('aria-describedby', this._selectedLabelId);
  } else {
    elem.removeAttr('aria-describedby');
  }
};
/**
 * Determines whether the specified item is expanded
 * @param {jQuery} item the item element
 * @return {number} 0 if item is expanded, 1 if item is collapsed, 2 if item cannot be expand or collapse.
 * @private
 */
oj.SlidingNavListHandler.prototype.GetState = function (item) {
  var expanded = this.m_widget.getFocusItem(item).attr("aria-expanded");
  if (expanded === "true") {
    return this.m_widget.STATE_EXPANDED;
  }

  if (expanded === "false") {
    return this.m_widget.STATE_COLLAPSED;
  }
  return this.m_widget.STATE_NONE;
};
/**
 * Sets the disclosed state of the item
 * @param {jQuery} item the item element
 * @param {number} state 0 if item is expanded, 1 if item is collapsed, 2 if item cannot be expand or collapse.
 * @private
 */
oj.SlidingNavListHandler.prototype.SetState = function (item, state) {
  if (state === this.m_widget.STATE_EXPANDED) {
    this.m_widget.getFocusItem(item)
      .attr("aria-expanded", "true");
    item.removeClass(this.m_widget.COLLAPSED_STYLE_CLASS)
      .addClass(this.m_widget.EXPANDED_STYLE_CLASS);

  } else if (state === this.m_widget.STATE_COLLAPSED) {
    this.m_widget.getFocusItem(item)
      .attr("aria-expanded", "false");
    item.removeClass(this.m_widget.EXPANDED_STYLE_CLASS)
      .addClass(this.m_widget.COLLAPSED_STYLE_CLASS);
  }
};

oj.SlidingNavListHandler.prototype.ModifyListItem = function ($item, itemContent) {
  var focusableElement = this.m_widget.getFocusItem($item);

  focusableElement.attr('role', 'menuitem');
  if (!itemContent.attr('id')) {
    itemContent.uniqueId();
  }
  // Ensure that it collapses all nodes.
  var groupItems = $item.children('.' + this.m_widget.getGroupStyleClass());
  if (groupItems.length > 0) {
    focusableElement.attr('aria-haspopup', 'true');
    groupItems.attr('role', 'menu');
    groupItems.css("display", "");
    $item.removeAttr('aria-expanded');
    focusableElement.attr('aria-expanded', 'false');
  }
};

oj.SlidingNavListHandler.prototype.BeforeRenderComplete = function () {
  this.m_root.attr('role', 'menu');
  this.m_widget.element.attr('role','presentation');
};

oj.SlidingNavListHandler.prototype.Init = function (opts) {
  var self =  this;
  this.m_widget.ojContext._on(this.m_widget.ojContext.element, {
    "click": function(event) {
      if ($(event.target).closest('.oj-navigationlist-previous-link, .oj-navigationlist-previous-button').length > 0) {
        self.CollapseCurrentList(event);
      }
    },
    "keydown": function(event) {
      if ($(event.target).closest('.oj-navigationlist-previous-link, .oj-navigationlist-previous-button').length > 0) {
        if (event.keyCode === $.ui.keyCode.ENTER) {
          self.CollapseCurrentList(event);
        }
      }

      if ($(event.target).closest('.' + self.m_widget.GetStyleClass()).length > 0) {
        //check for default prevented as it might have already processed for quiting f2 mode
        if (event.keyCode === $.ui.keyCode.ESCAPE && !event.isDefaultPrevented()) {
          self.CollapseCurrentList(event);
        }
      }
    }
  });

  this.m_root.addClass('oj-navigationlist-slider')
              .addClass(this.m_widget.getNavListVerticalStyleClass());
  opts.element.addClass('oj-navigationlist-current');
  this._buildSlidingNavListHeader(opts);
  this._initializeHierarchicalView();
};
/**
 * Initialize sliding navigation list header .
 * @private
 * @memberof! oj.ojNavigationList
 */
oj.SlidingNavListHandler.prototype._buildSlidingNavListHeader = function (opts) {
  var selectedLabel;
  this._toolbar = $(document.createElement('div'));
  this._toolbar.addClass('oj-navigationlist-toolbar');
  this._previousLink = $(document.createElement('a'));
  this._prevButton = $(document.createElement('a'));
  this._prevButton.addClass('oj-navigationlist-previous-button');
  this._prevButton.css('visibility', 'hidden')
                  .attr('tabindex', '-1'); // @HTMLUpdateOK
  this._previousLink.addClass('oj-navigationlist-previous-link')
    .attr('tabindex', '-1'); // @HTMLUpdateOK
  this._headerLabel = $(document.createElement('label'));
  this._headerLabel.addClass('oj-navigationlist-current-header')
    .text(this.m_widget.getRootLabel());
  this._vSeparator = $(document.createElement('span'));
  this._vSeparator.attr('role', 'separator')// @HTMLUpdateOK
    .attr('aria-orientation', 'vertical')// @HTMLUpdateOK
    .addClass('oj-navigationlist-toolbar-separator');
  this._hviewBtn = $(document.createElement('button'));
  this._hviewBtn.addClass('oj-navigationlist-hierarchical-button')
                .attr('tabindex', '-1');// @HTMLUpdateOK
  this._hviewMenu = $(document.createElement('ul'));
  this._hviewMenu.addClass('oj-navigationlist-hierarchical-menu').hide();
  selectedLabel = $(document.createElement('label'));
  selectedLabel.uniqueId().addClass('oj-helper-hidden-accessible')
    .attr('aria-hidden', 'true');// @HTMLUpdateOK
  this._selectedLabelId = selectedLabel.attr('id');
  selectedLabel.text(this.m_component.getTranslatedString('selectedLabel'));
  this._previousLink.append(this._headerLabel); // @HTMLUpdateOK
  this._toolbar.append(this._prevButton); // @HTMLUpdateOK
  this._toolbar.append(this._previousLink) // @HTMLUpdateOK
    .append(this._vSeparator) // @HTMLUpdateOK
    .append(this._hviewBtn) // @HTMLUpdateOK
    .append(this._hviewMenu) // @HTMLUpdateOK
    .append(selectedLabel); // @HTMLUpdateOK
  this.m_root.prepend(this._toolbar); // @HTMLUpdateOK
  this._showOrHideHierarchyMenu(opts.hierarchyMenuDisplayThresholdLevel);
};

/**
 * Collapses the current visible list if it is not the top level list
 * @private
 */
oj.SlidingNavListHandler.prototype.CollapseCurrentList = function (event) {
  // pop the expanded item stack
  var current = this.m_expanded.pop();
  if (current) {
    this.m_widget.CollapseItem(current, event, true, null, true, true);
  }
};



/**
 * Initialize hierarchical view for sliding navlist.
 * @private
 * @memberof! oj.ojNavigationList
 */
oj.SlidingNavListHandler.prototype._initializeHierarchicalView = function () {
  var self = this,
    menuid = this._hviewMenu.uniqueId().attr('id');
  this._hviewMenu.ojMenu({
    openOptions: {
      position: {
        "my": "end top",
        "at": "end bottom"
      }
    },
    select: function (event, ui) {
      var itemsToRemove = ui.item.nextAll(),
        currentKey,
        item,
        expandedItems = self.m_expanded,
        targetItemKey = ui.item.data('key');
		self.m_widget.signalTaskStart(); // signal method task start
      //collapse all child lists untill target list is visible
      while (expandedItems.length > 0) {
        item = expandedItems.pop(); // remove item from list
        currentKey = self.m_widget.GetKey(item[0]);
        self.m_widget.CollapseItem($(item), event, true, currentKey, true, true);
        if (self.m_widget.compareValues(targetItemKey, currentKey)) {
          break;
        }
      }
      itemsToRemove.remove();
      ui.item.remove();
      self._hviewMenu.ojMenu('refresh');
	  self.m_widget.signalTaskEnd(); // signal method task end
    }
  });
  this._hviewBtn.ojButton({
    'label': this.m_component.getTranslatedString('hierMenuBtnLabel'),
    'display': 'icons',
    'icons': {
      start: 'oj-fwk-icon oj-hier-icon'
    },
    'menu': '#' + menuid,
    'disabled': true,
    'chroming': 'half'
  });
  this._prevButton.ojButton({
    'label': this.m_component.getTranslatedString('previousIcon'),
    'display': 'icons',
    'icons': {
      start: 'oj-navigationlist-previous-icon oj-component-icon oj-clickable-icon-nocontext'
    },
    'chroming': 'half'
  });
};

/**
 * Add current visible group item to hierarchical menu and update header text with new list's label.
 * @param {string} itemKey key of the group item whose list will be displayed
 * @param {string} label current list's label
 * @param {string} parentLabel parent list's label
 * @private
 */
oj.SlidingNavListHandler.prototype._addItemToHviewMenu = function (itemKey, label, parentLabel) {
  var i;
  if (this._hviewBtn) {
    var itemsinTree = this._hviewMenu.find('li').length;
    var menuListItem = $(document.createElement('li'));
    var menuItem = $(document.createElement('a'));
    menuItem.attr('href', '#');// @HTMLUpdateOK
    menuListItem.append(menuItem); // @HTMLUpdateOK
    if (itemsinTree > 0) {
      for (i = 0; i < itemsinTree; i++) {
        if (i > 0) {
          menuItem.append($(document.createElement('span')) // @HTMLUpdateOK
            .addClass('oj-navigationlist-hvitem-space'));
        }
      }
      menuItem.append($(document.createElement('span')) // @HTMLUpdateOK
        .addClass('oj-menu-item-icon oj-icon oj-navigationlist-level-indicator'));
    }
    var menuItemLabel = $(document.createElement('span'))
      .addClass('oj-navigationlist-hierarchical-menu-label');
    menuItemLabel.text(parentLabel);
    menuItem.append(menuItemLabel); // @HTMLUpdateOK

    //Store item key reference to refresh the list when user clicks on  hiearchical menu item.
    menuListItem.data('key', itemKey);
    this._hviewMenu.append(menuListItem); // @HTMLUpdateOK

    this._hviewMenu.ojMenu('refresh');
    this._showOrHideHierarchyMenu(this.m_widget.GetOption('hierarchyMenuDisplayThresholdLevel'));
    this._hviewBtn.ojButton("option", "disabled", false);
    this._prevButton.css('visibility', 'visible');
    if (this.m_widget.getRootElement().hasClass('oj-focus-ancestor')) {
      // this._previousLink.attr('tabindex', '0');
      this._prevButton.attr('tabindex', '0');// @HTMLUpdateOK
    }
    this._headerLabel.text(label);
  }
};

oj.SlidingNavListHandler.prototype.SetOptions = function (options) {
  
  if(options['hierarchyMenuDisplayThresholdLevel'] === undefined)
    return;

  var currentHMenuDisplayThreshold = this.m_widget.GetOption('hierarchyMenuDisplayThresholdLevel');
  if (currentHMenuDisplayThreshold !== options['hierarchyMenuDisplayThresholdLevel']) {
    this._showOrHideHierarchyMenu(options.hierarchyMenuDisplayThresholdLevel);
  }
};

oj.SlidingNavListHandler.prototype._showOrHideHierarchyMenu = function (hierarchyMenuDisplayThresholdLevel) {
  var itemsinTree = this._hviewMenu.find('li').length;
  if (hierarchyMenuDisplayThresholdLevel === -1 || itemsinTree < hierarchyMenuDisplayThresholdLevel) {
    this._vSeparator.css('visibility', 'hidden');
    if (this._hviewBtn[0] === document.activeElement) { // is(:focus) failing during test cases so using document.activeElement.
      //tried by moving focus to <ul> using  this.m_widget.focus() but listview listen for focusin event.
      this.m_root.focusin();
    }
    this._hviewBtn.css('visibility', 'hidden');
  } else if (itemsinTree >= hierarchyMenuDisplayThresholdLevel) {
    this._vSeparator.css('visibility', 'visible');
    this._hviewBtn.css('visibility', 'visible');
  }
};

/**
 * Removes parent item of current list from hierarchical menu
 * otherwise return the emptyText set in the options
 * @private
 */
oj.SlidingNavListHandler.prototype._removeItemFromHviewMenu = function () {
  if (this._hviewBtn) {
    var removed = this._hviewMenu.find('li').last().remove();
    this._hviewMenu.ojMenu('refresh');
    this._showOrHideHierarchyMenu(this.m_widget.GetOption('hierarchyMenuDisplayThresholdLevel'));
    if (this._hviewMenu.children('li').length === 0) {
      this._hviewBtn.ojButton("option", "disabled", true);
      this._prevButton.css('visibility', 'hidden');
      // this._previousLink.attr('tabindex', '-1');
      this._prevButton.attr('tabindex', '-1');// @HTMLUpdateOK
      this._headerLabel.text(this.m_widget.getRootLabel());
    } else {
      this._headerLabel.text(removed.children('a').text());
    }
  }
};

oj.SlidingNavListHandler.prototype.RestoreItem = function (item, itemContent, sublist) {
  item.removeClass(this.m_widget.SLIDING_NAVLIST_CURRENT_STYLE_CLASS);
  itemContent.removeAttr('role')
    .removeAttr('aria-expanded')
    .removeAttr('aria-describedby')
    .removeAttr('aria-hidden');
};

oj.SlidingNavListHandler.prototype._makeToolbarItemsFocusable = function (enable) {
  var itemsinTree;
  if (enable) {
    itemsinTree = this._hviewMenu.find('li').length;
    if (itemsinTree) {
      // this._previousLink.attr('tabindex', '0');
      this._prevButton.attr('tabindex', '0');
    }
    this._hviewBtn.attr('tabindex', '0');
  } else {
    // this._previousLink.attr('tabindex', '-1');
    this._prevButton.attr('tabindex', '-1');
    this._hviewBtn.attr('tabindex', '-1');
  }
};

/**
 * Handler for focus event
 * @param {Event} event the focus event
 * @protected
 * @override
 */
oj.SlidingNavListHandler.prototype.HandleFocus = function (event) {
  //If focus is on navlist or items but not on toolbar
  if (!($.contains(this._toolbar.get(0), /** @type {Element} */ (event.target)) ||
        this._hviewMenu.get(0) === /** @type {Element} */ (event.relatedTarget))) {
    //make toolbar items focusable
    this._makeToolbarItemsFocusable(true);
    _ojNavigationListView.superclass.HandleFocus.apply(this.m_widget, arguments);
  }
};

/**
 * Handler for blur event
 * @param {Event} event the blur event
 * @protected
 * @override
 */
oj.SlidingNavListHandler.prototype.HandleBlur = function (event) {
  //If focus going to toolbar remove focus ancestor and unhighlight the active one
  if ($.contains(this._toolbar.get(0), /** @type {Element} */ (event.relatedTarget)) ||
      this._hviewMenu.get(0) === /** @type {Element} */ (event.relatedTarget)) {
    this.m_widget.UnhighlightActive();
  } else {
    // if focus moves out side navlist make toolbar items not focusable
    if (event.relatedTarget == null || !$.contains(this.m_root.get(0), /** @type {Element} */ (event.relatedTarget))) {
      this._makeToolbarItemsFocusable(false);
    }
    _ojNavigationListView.superclass.HandleBlur.apply(this.m_widget, arguments);
  }
};

oj.SlidingNavListHandler.prototype.GetNodeBySubId = function (locator) {
  if (locator["subId"] === 'oj-navigationlist-previous-link') {
    return this._prevButton ? this._prevButton[0] : null;
  }

  if (locator["subId"] === 'oj-navigationlist-hierarchical-button') {
    return this._hviewBtn ? this._hviewBtn[0] : null;
  }

  if (locator["subId"] === 'oj-navigationlist-hierarchical-menu') {
    return this._hviewMenu ? this._hviewMenu[0] : null;
  }

  return null;
};

oj.SlidingNavListHandler.prototype.GetSubIdByNode = function (node) {
  if ($(node).closest(this._prevButton).length > 0) {
    return {
      'subId': 'oj-navigationlist-previous-link'
    };
  }

  if ($(node).closest(this._hviewBtn).length > 0) {
    return {
      'subId': 'oj-navigationlist-hierarchical-button'
    };
  }

  if ($(node).closest(this._hviewMenu).length > 0) {
    return {
      'subId': 'oj-navigationlist-hierarchical-menu'
    };
  }

  return null;
};


/**
 * todo: create common utility class between combobox, listview and navlist
 * @private
 */
var _NavigationListUtils = {
  clazz: function (SuperClass, methods) {
    var constructor = function () {};
    oj.Object.createSubclass(constructor, SuperClass, '');
    $.extend(constructor.prototype, methods);
    return constructor;
  }
};
/**
 * @export
 * @class _ojNavigationListView
 * @classdesc NavigationList
 * @constructor
 * @ignore
 */
var _ojNavigationListView = _NavigationListUtils.clazz(oj._ojListView,
  /** @lends _ojNavigationListView.prototype */
  {
    OPTION_DRILL_MODE: 'drillMode',
    OPTION_DRILL_MODE_NONE: 'none',
    OPTION_DRILL_MODE_COLLAPSIBLE: 'collapsible',
    OPTION_DRILL_MODE_SLIDING: 'sliding',
    OPTION_DISPLAY: 'display',
    OPTION_DISPLAY_ICONS: 'icons',
    OPTION_DISPLAY_ALL: 'all',
    OPTION_EDGE: 'edge',
    OPTION_EDGE_TOP: 'top',
    OPTION_EDGE_END: 'end',
    OPTION_EDGE_START: 'start',
    OPTION_EDGE_BOTTOM: 'bottom',
    OPTION_SELECTION: 'selection',
    OPTION_CURRENT_ITEM: 'currentItem',
    TAG_NAME_TAB_BAR:'oj-tab-bar',
    NAVLIST_ITEM_SUBID_KEY: {
      'navlist': 'oj-navigationlist-item',
      'tabbar': 'oj-tabbar-item'
    },
    NAVLIST_EXPANDED_STYLE_CLASS: {
      'navlist': 'oj-navigationlist-expanded',
      'tabbar': 'oj-tabbar-expanded'
    },
    NAVLIST_COLLAPSIBLE_STYLE_CLASS: {
      'navlist': 'oj-navigationlist-collapsible',
      'tabbar': 'oj-tabbar-collapsible'
    },
    NAVLIST_VERTICAL_STYLE_CLASS: {
      'navlist': 'oj-navigationlist-vertical',
      'tabbar': 'oj-tabbar-vertical'
    },
    
    ITEM_CONTENT_STYLE_CLASS: {
      'navlist':'oj-navigationlist-item-content',
      'tabbar':'oj-tabbar-item-content'
    },
    NAVLIST_DIVIDERS_STYLE_CLASS: {
      'navlist':'oj-navigationlist-item-dividers',
      'tabbar':'oj-tabbar-item-dividers'
    },
    LAST_ITEM_STYLE_CLASS: {
      'navlist':'oj-navigationlist-item-last-child',
      'tabbar':'oj-tabbar-item-last-child'
    },
    EXPANDED_STYLE_CLASS: 'oj-expanded',
    COLLAPSED_STYLE_CLASS: 'oj-collapsed',
    SLIDING_NAVLIST_CURRENT_STYLE_CLASS: 'oj-navigationlist-current',
    DIVIDER_STYLE_CLASS: {
      'navlist':'oj-navigationlist-divider',
      'tabbar':'oj-tabbar-divider'
    },
    NAVLIST_OVERFLOW_MENU_ITEM: {
      'navlist':'oj-navigationlist-overflow-menu-item',
      'tabbar':'oj-tabbar-overflow-menu-item'
    },
    NAVLIST_OVERFLOW_MENU: {
      'navlist':'oj-navigationlist-overflow-menu',
      'tabbar':'oj-tabbar-overflow-menu'
    },
    NAVLIST_OVERFLOW_ITEM_ICON: {
      'navlist':'oj-navigationlist-overflow-item-icon',
      'tabbar':'oj-tabbar-overflow-item-icon'
    },
    _CATEGORY_DIVIDER_STYLE_CLASS: {
      'navlist':'oj-navigationlist-category-divider',
      'tabbar':'oj-tabbar-category-divider'
    },
    _ITEM_LABEL_STYLE_CLASS: {
      'navlist':'oj-navigationlist-item-label',
      'tabbar':'oj-tabbar-item-label'
    },
    _ICON_ONLY_STYLE_CLASS: {
      'navlist':'oj-navigationlist-icon-only',
      'tabbar':'oj-tabbar-icon-only'
    },
    _ITEM_ICON_STYLE_CLASS: {
      'navlist':'oj-navigationlist-item-icon',
      'tabbar':'oj-tabbar-item-icon'
    },
    _HORIZONTAL_NAVLIST_STYLE_CLASS: {
      'navlist':'oj-navigationlist-horizontal',
      'tabbar':'oj-tabbar-horizontal'
    },
    _NAVLIST_END_EDGE_STYLE_CLASS: {
      'navlist':'oj-navigationlist-vertical-end',
      'tabbar':'oj-tabbar-vertical-end'
    },
    _NAVLIST_BOTTOM_EDGE_STYLE_CLASS: {
      'navlist':'oj-navigationlist-horizontal-bottom',
      'tabbar':'oj-tabbar-horizontal-bottom'
    },
    _NAVLIST_HAS_ICONS: {
      'navlist': 'oj-navigationlist-has-icons',
      'tabbar': 'oj-tabbar-has-icons'
    },
    _NAVLIST_ITEM_HAS_NO_ICON: {
      'navlist': 'oj-navigationlist-item-no-icon',
      'tabbar': 'oj-tabbar-item-no-icon'
    },
    _NAVLIST_ITEM_TITLE: {
      'navlist':'oj-navigationlist-item-title',
      'tabbar':'oj-tabbar-item-title'
    },
    _NAVLIST_STYLE_CLASS: {
      'navlist': 'oj-navigationlist',
      'tabbar': 'oj-tabbar'
    },
    _NAVLIST_TOUCH_STYLE_CLASS: {
      'navlist': 'oj-navigationlist-touch',
      'tabbar':'oj-tabbar-touch'
    },
    _NAVLIST_LISTVIEW_CONTAINER_STYLE_CLASS: {
      'navlist':'oj-navigationlist-listview-container',
      'tabbar':'oj-tabbar-listview-container'
    },
    _IS_TITLE_ATTR_ADDED_DUE_TO_TRUNCATION: 'IsTitleAttrDueToTruncation',
    _APPLICATION_LEVEL_NAV_STYLE_CLASS: 'oj-navigationlist-app-level',
    _PAGE_LEVEL_NAV_STYLE_CLASS: 'oj-navigationlist-page-level',
    _NAVLIST_ITEM_ICON_HAS_TITLE: 'navigationListItemIconHastitle',
    _NAVLIST_NO_FOLLOW_LINK_CLASS: {
      'navlist':'oj-navigationlist-nofollow-link',
      'tabbar':'oj-tabbar-nofollow-link'
    },
    _CONTAINER_STYLE_CLASS : {
      'navlist': 'oj-navigationlist-listview',
      'tabbar': 'oj-tabbar-listview'
    },
    _ELEMENT_STYLE_CLASS : {
      'navlist': 'oj-navigationlist-element',
      'tabbar': 'oj-tabbar-element'
    },
    _FOCUSED_ELEMENT_STYLE_CLASS : {
      'navlist': 'oj-navigationlist-focused-element',
      'tabbar': 'oj-tabbar-focused-element'
    },
    _ITEM_ELEMENT_STYLE_CLASS : {
      'navlist': 'oj-navigationlist-item-element',
      'tabbar': 'oj-tabbar-item-element'
    },
    _ITEM_STYLE_CLASS : {
      'navlist': 'oj-navigationlist-item',
      'tabbar': 'oj-tabbar-item'
    },
    _OPTION_DEFAULT_STYLE_CLASS: {
      'navlist': 'oj-navigationlist-option-defaults',
      'tabbar': 'oj-tabbar-option-defaults'
    },
    
    /**
     * Returns Item label text
     * @returns {string|null} Item label
     */
    getItemLabel: function (target) {
      var itemContent = this.getItemContentElement(target);
      if (itemContent.is('a')) { // When using simple <a> markup
        return $.trim(itemContent.text());
      }
      //When using arbitrary content, extract item title from element having marker class .oj-navigationlist-item-title.
      return $.trim(itemContent.find('.' + this.getItemTitleStyleClass()).text());
    },
    /**
     * Returns Item content root element.
     * @returns {Object} Returns jquery object for item content root
     */
    getItemContentElement: function (item) {
      var itemContent = item.children('.' + this.getItemContentStyleClass());
      if (itemContent.length === 0) {
        itemContent = item.children('.' + this.getGroupItemStyleClass()).children('.' + this.getItemContentStyleClass());
        if (itemContent.length === 0) { //This case is when item label is invoked before complete initialization of listview
          itemContent = item.children('.' + this.getGroupItemStyleClass()).children(':not(.' + this.getExpandIconStyleClass() + '):not(.' + this.getCollapseIconStyleClass() + ')');
        }
      }
      return itemContent;
    },
    /**
     * Return true when page is in rtl mode otherwise false.
     * @returns {boolean} true if page is in rtl mode
     */
    isRtl: function () {
      return this.ojContext._GetReadingDirection() === "rtl";
    },

    _initNavigationMode: function(rootElement) {
      var tagName = rootElement[0].tagName.toLowerCase();
      
      if(tagName === this.TAG_NAME_TAB_BAR) {
        this._navigationMode = 'tabbar';
      } else {
          this._navigationMode = 'navlist'; //if user uses div jquery widget continue with application level
      }
    },

    _getNavigationMode: function() {
      return this._navigationMode;
    },
    /**
     * Called by content handler once content of all items are rendered
     * @override
     */
    renderComplete: function () {
      this.m_listHandler.BeforeRenderComplete();
      _ojNavigationListView.superclass.renderComplete.apply(this, arguments);
    },
    
    /**
     * Called by content handler once the content of an item is rendered triggered by an insert event
     * @param {Element} elem the item element
     * @param {Object} context the context object used for the item
     */
    itemInsertComplete: function (elem, context) {
      this.m_listHandler.ItemInsertComplete(elem, context);
    },

    /**
     * Called by content handler once the content of an item is removed triggered by an remove event
     * @param {Element} elem the item element
     */
    itemRemoveComplete: function (elem) {
      this.m_listHandler.ItemRemoveComplete(elem);
      _ojNavigationListView.superclass.itemRemoveComplete.apply(this, arguments);
    },
    /**
     * Restore content while restroying list
     * @private
     */
    _restoreContent: function (list) {
      var i, item, itemContent, itemIcon, focusableItem, sublist, items = list.children();
      list.removeAttr('style')
        .removeClass(this.getHasIconsStyleClass())
        .removeAttr('aria-hidden');
      for (i = 0; i < items.length; i++) {
        item = items[i];
        item = $(item);
        if (item.hasClass(this.getDividerStyleClass())) {
          item.remove();
          continue;
        }
        itemContent = this.getItemContentElement(item);
        itemContent.removeClass(this.getItemContentStyleClass())
          .removeClass(this.getHasNoIconStyleClass())
          .removeAttr('aria-haspopup');
        itemIcon = itemContent.children('.' + this.getItemIconStyleClass());
        if (itemIcon && itemIcon.length > 0) {
          itemIcon.removeAttr('role');
          itemIcon.removeAttr('aria-label');
          this._removeToolTipOnIcon(itemIcon);
        }

        item.removeClass('oj-default')
          .removeAttr('role')
          .removeAttr('aria-disabled')
          .removeAttr('aria-expanded')
          .removeAttr('aria-hidden')
          .removeAttr('aria-pressed');
        focusableItem = this.getFocusItem(item);
        focusableItem.removeAttr('role')
          .removeAttr('aria-hidden')
          .removeAttr('aria-pressed');
        itemContent.children('.' + this.getItemLabelStyleClass())
          .contents().unwrap();
        if (focusableItem.data(this._IS_TITLE_ATTR_ADDED_DUE_TO_TRUNCATION)) {
          focusableItem.removeAttr('title');
        }
        sublist = item.children('ul');
        if (sublist.length > 0) {
          this.m_listHandler.RestoreItem(item, itemContent, sublist);
          this._restoreContent(sublist);
        } else {
          this.m_listHandler.RestoreItem(item, itemContent);
        }
      }
    },
    /**
     * Overriding to exclude oj-navigationlist-item-content from clickable components.
     * @override
     * @protected
     */
    IsNodeEditableOrClickable: function (node) {
      if (node.hasClass(this.getItemContentStyleClass()) || node.hasClass(this.getExpandIconStyleClass()) || node.hasClass(this.getCollapseIconStyleClass())) {
        return false;
      }
      return _ojNavigationListView.superclass.IsNodeEditableOrClickable.apply(this, arguments);
    },
    /**
     * checks for whether a node is editable or clickable.
     * @param {jQuery} node  Node
     * @return {boolean} true or false
     * @override
     * @protected
     */
    IsElementEditableOrClickable: function (node) {
      var nodeName = node.prop("nodeName");
      //Exclude navlist item content <a> tag from below list and also checking for oj-component class as it is needed for toggle button.
      return (nodeName.match(/^INPUT|SELECT|OPTION|BUTTON|^A\b|TEXTAREA/) && !node.hasClass(this.getItemContentStyleClass())) || node.hasClass('oj-component');
    },
    /**
     * Prepare options to initialize ListView base class
     * @private
     */
    _prepareListViewOptions: function (navlistOptions) {

      var self = this,
        opts = $.extend({}, navlistOptions);

      opts["drillMode"] = navlistOptions['drillMode'] !== 'none' ? 'collapsible' : 'none';
      opts["selection"] = navlistOptions['selection'] !== null ? [navlistOptions['selection']] : [];
      opts["selectionMode"] = 'single';
      opts["item"] = $.extend({
        "focusable": function(context) {
          if ($(context['data']).is('li')) {
            return !$(context['data']).hasClass('oj-disabled');
          }
          return !$(context['parentElement']).hasClass('oj-disabled');
        }
      }, navlistOptions['item']);

      opts.element = this._list;
      return opts;
    },
    /**
     * Returns root label for navigation list.
     * otherwise return the emptyText set in the options
     * @return {string} Label for navigation list
     */
    getRootLabel: function () {
      if (this.ojContext.options['rootLabel']) {
        return this.ojContext.options['rootLabel'];
      }

      return this.ojContext.getTranslatedString('defaultRootLabel');
    },

    /**
     * Sets wai-aria properties on root element
     * @override
     * @protected
     */
     SetAriaProperties: function () {
       this.ojContext.element.attr("aria-multiselectable", false);
     },
    /**
     * Handler for focus event
     * @param {Event} event the focus event
     * @protected
     * @override
     */
    HandleFocus: function(event)
    {
      return this.m_listHandler.HandleFocus(event);
    },
    /**
     * Handler for blur event
     * @param {Event} event the blur event
     * @protected
     * @override
     */
    HandleBlur: function(event)
    {
      return this.m_listHandler.HandleBlur(event);
    },
    /**
     * Sets the tab index attribute of the root element
     * @override
     */
    SetRootElementTabIndex: function()
    {
        this.ojContext.element.attr("tabIndex", 0);
    },

    /**
     * Removes the tab index attribute of the root element
     * @override
     */
    RemoveRootElementTabIndex: function()
    {
        this.ojContext.element.removeAttr("tabIndex");
    },
    /**
     * Removes wai-aria properties on root element
     * @override
     * @protected
     */
     UnsetAriaProperties: function () {
       this.ojContext.element.removeAttr("aria-activedescendant")
                   .removeAttr("aria-multiselectable");
     },
    /**
     * Whether to use grid role
     * @override
     */
    ShouldUseGridRole: function()
    {
        return false;
    },
    /**
     * Overriding init to initialize list with respective List handler.
     * @override
     */
    init: function (navlistopts) {
      var opts, 
        self = this,
        element = navlistopts.ojContext.element;
      this._initNavigationMode(element);
      
      element.addClass(this.getNavListStyleClass());

      if (oj.DomUtils.isTouchSupported()) {
        element.addClass(this.getNavListTouchStyleClass());
      }

      this._list = element.children('ul:first');
      if (this._list.length === 0) {
        this._list = $(document.createElement("ul"));
        element.append(this._list); //@HTMLUpdateOK
      }
      
      var listViewContainer = $(document.createElement("div"));
      listViewContainer.addClass(this.getNavListContainerStyleClass());

      this._list.wrap(listViewContainer); // @HTMLUpdateOK
      opts = this._prepareListViewOptions(navlistopts);
     
      _ojNavigationListView.superclass.init.call(this, opts);
      this.element.removeClass('oj-component-initnode');
      this.ojContext._on(this.ojContext.element, {
        "mouseup": function (event) {
          self._clearActiveState(event);
        },
        "mouseover": function (event) {
          if($(event.target).closest("a." + self.getItemContentStyleClass()).length > 0) {
            var $itemLink = $(event.target).closest("a." + self.getItemContentStyleClass());
            var $label = $itemLink.find('.' + self.getItemLabelStyleClass());
            //Add title attribute only when the text is truncated.
            if ($label[0].offsetWidth < $label[0].scrollWidth && !$itemLink.attr('title')) {
              $itemLink.attr('title', $label.text().trim());
              $itemLink.data(self._IS_TITLE_ATTR_ADDED_DUE_TO_TRUNCATION, 'true');
            }
          }
        },
        "mouseout": function (event) {
          if($(event.target).closest("a." + self.getItemContentStyleClass()).length > 0) {
            //Remove title attribute on mouseleave.
            var $itemLink = $(event.target).closest("a." + self.getItemContentStyleClass());
            if ($itemLink.data(self._IS_TITLE_ATTR_ADDED_DUE_TO_TRUNCATION)) {
              $itemLink.removeData(self._IS_TITLE_ATTR_ADDED_DUE_TO_TRUNCATION);
              $itemLink.removeAttr('title');
            }
            self._clearActiveState(event);
          }
        }
      });
    },

    _initListHandler: function () {
      var drillMode = this.ojContext.options['drillMode'];
      var edge = this.ojContext.options['edge'];
      
      if (drillMode === this.OPTION_DRILL_MODE_SLIDING) {
        this.m_listHandler = new oj.SlidingNavListHandler(this, this.ojContext.element, this.ojContext);
      } else if (drillMode === this.OPTION_DRILL_MODE_COLLAPSIBLE) {
        this.m_listHandler = new oj.CollapsibleNavListHandler(this, this.ojContext.element, this.ojContext);
      } else if (drillMode === this.OPTION_DRILL_MODE_NONE && (edge === this.OPTION_EDGE_TOP || edge === this.OPTION_EDGE_BOTTOM)) {
        this.m_listHandler = new oj.HorizontalNavListHandler(this, this.ojContext.element, this.ojContext);
      } else {
        this.m_listHandler = new oj.DefaultNavListHandler(this, this.ojContext.element, this.ojContext);
      }

      this.m_listHandler.Init(this.options);
      var navigationLevel = this.ojContext.options['navigationLevel'];
      this._setNavigationLevel(navigationLevel);
    },

    _setNavigationLevel: function (navigationLevel) {
      var drillMode = this.ojContext.options['drillMode'];
      if (drillMode === 'none') {
        if (navigationLevel === 'application' || this.ojContext.element[0].tagName.toLowerCase() === 'oj-navigation-list') {
          this.ojContext.element.addClass(this._APPLICATION_LEVEL_NAV_STYLE_CLASS);
          this.ojContext.element.removeClass(this._PAGE_LEVEL_NAV_STYLE_CLASS);
        } else if (navigationLevel === 'page') {
          this.ojContext.element.addClass(this._PAGE_LEVEL_NAV_STYLE_CLASS);
          this.ojContext.element.removeClass(this._APPLICATION_LEVEL_NAV_STYLE_CLASS);
        }
      }
    },
    _clearActiveState: function (event) {
      var item = this.FindItem($(event.target));
      if (item != null) {
        this.HighlightUnhighlightElem(item, "oj-active", false);
      }
    },
    /**
     * Initialize the listview after creation
     * @override
     */
    afterCreate: function () {
      this._initListHandler();
      _ojNavigationListView.superclass.afterCreate.apply(this, arguments);
    },

    /**
     * Gets the animation effect for the specific action
     * @param {string} action the action to retrieve the effect
     * @return {Object} the animation effect for the action
     */
    getAnimationEffect: function(action)
    {
      return this.m_listHandler.GetAnimationEffect(action);
    },
    
    notifyAttached: function()
    {
        _ojNavigationListView.superclass.notifyAttached.apply(this, arguments);
        this.m_listHandler.NotifyAttached();   
    },

    HandleResize: function(width, height)
    {
      var self = this;
      _ojNavigationListView.superclass.HandleResize.apply(this, arguments);
      if (width > 0 && height > 0 && this.m_listHandler != null)
        {
          self.m_listHandler.HandleResize(width, height);   
        }
    },
    /**
     * Event handler for when mouse down or touch start anywhere in the list
     * @param {Event} event mousedown or touchstart event
     * @protected
     */
    HandleMouseDownOrTouchStart: function (event) {
      _ojNavigationListView.superclass.HandleMouseDownOrTouchStart.apply(this, arguments);
      var item = this.FindItem($(event.target));
      if (item && !item.hasClass("oj-disabled")) {
        this.HighlightUnhighlightElem(item, "oj-active", true);
      }
    },

    /**
     * Event handler for when touch end/cancel happened
     * @param {Event} event touchend or touchcancel event
     * @protected
     */
    HandleTouchEndOrCancel: function (event) {
      this._clearActiveState(event);
      _ojNavigationListView.superclass.HandleTouchEndOrCancel.apply(this, arguments);
    },
    getItemContentStyleClass: function() {
      return this.ITEM_CONTENT_STYLE_CLASS[this._getNavigationMode()];
    },
    getNavListExpandedStyleClass: function() {
      return this.NAVLIST_EXPANDED_STYLE_CLASS[this._getNavigationMode()];
    },
    getNavListCollapsibleStyleClass: function() {
      return this.NAVLIST_COLLAPSIBLE_STYLE_CLASS[this._getNavigationMode()];
    },
    getNavListVerticalStyleClass: function() {
      return this.NAVLIST_VERTICAL_STYLE_CLASS[this._getNavigationMode()];
    },
    getNavListItemsDividerStyleClass: function() {
      return this.NAVLIST_DIVIDERS_STYLE_CLASS[this._getNavigationMode()];
    },
    getLastItemStyleClass: function() {
      return this.LAST_ITEM_STYLE_CLASS[this._getNavigationMode()];
    },
    getDividerStyleClass: function() {
      return this.DIVIDER_STYLE_CLASS[this._getNavigationMode()];
    },
    getOverflowItemStyleClass: function() {
      return this.NAVLIST_OVERFLOW_MENU_ITEM[this._getNavigationMode()];
    },
    getOverflowMenuStyleClass: function() {
      return this.NAVLIST_OVERFLOW_MENU[this._getNavigationMode()];
    },
    getOverflowItemIconStyleClass: function() {
      return this.NAVLIST_OVERFLOW_ITEM_ICON[this._getNavigationMode()];
    },
    getCategoryDividerStyleClass: function() {
      return this._CATEGORY_DIVIDER_STYLE_CLASS[this._getNavigationMode()];
    },
    getItemLabelStyleClass: function() {
      return this._ITEM_LABEL_STYLE_CLASS[this._getNavigationMode()];
    },
    getIconOnlyStyleClass: function() {
      return this._ICON_ONLY_STYLE_CLASS[this._getNavigationMode()];
    },
    getItemIconStyleClass: function() {
      return this._ITEM_ICON_STYLE_CLASS[this._getNavigationMode()];
    },
    getHorizontalNavListStyleClass: function() {
      return this._HORIZONTAL_NAVLIST_STYLE_CLASS[this._getNavigationMode()];
    },
    getNavListEndEdgeStyleClass: function(){
      return this._NAVLIST_END_EDGE_STYLE_CLASS[this._getNavigationMode()];
    },
    getNavListBottomEdgeStyleClass: function(){
      return this._NAVLIST_BOTTOM_EDGE_STYLE_CLASS[this._getNavigationMode()];
    },
    getHasIconsStyleClass: function() {
      return this._NAVLIST_HAS_ICONS[this._getNavigationMode()];
    },
    getHasNoIconStyleClass: function() {
      return this._NAVLIST_ITEM_HAS_NO_ICON[this._getNavigationMode()];
    },
    getItemTitleStyleClass: function() {
      return this._NAVLIST_ITEM_TITLE[this._getNavigationMode()];
    },
    getNavListStyleClass: function() {
      return this._NAVLIST_STYLE_CLASS[this._getNavigationMode()];
    },
    getNavListTouchStyleClass: function() {
      return this._NAVLIST_TOUCH_STYLE_CLASS[this._getNavigationMode()];
    },
    getNavListContainerStyleClass: function() {
      return this._NAVLIST_LISTVIEW_CONTAINER_STYLE_CLASS[this._getNavigationMode()];
    },
    getNoFollowLinkStyleClass: function() {
      return this._NAVLIST_NO_FOLLOW_LINK_CLASS[this._getNavigationMode()];
    },
    getItemSubIdKey: function(){
      if(this.ojContext.element[0].tagName.toLowerCase() === this.TAG_NAME_TAB_BAR){
       return this.NAVLIST_ITEM_SUBID_KEY['tabbar'] 
      } 
      return this.NAVLIST_ITEM_SUBID_KEY['navlist'];
    },

    /**
     * Returns Navlist specific container style class
     * @override
     * @protected
     */
    GetContainerStyleClass: function () {
      return this._CONTAINER_STYLE_CLASS[this._getNavigationMode()];
    },

    /**
     * Returns Navlist specific root element style class
     * @override
     * @protected
     */
    GetStyleClass: function () {
      return this._ELEMENT_STYLE_CLASS[this._getNavigationMode()];
    },

    /**
     * Returns Navlist specific Item style class
     * @override
     */
    getItemStyleClass: function () {
      return this._ITEM_STYLE_CLASS[this._getNavigationMode()];
    },

    getFocusedElementStyleClass: function () {
      return this._FOCUSED_ELEMENT_STYLE_CLASS[this._getNavigationMode()];
    },
    /**
     * Returns Navlist specific Item element style class
     * @override
     */
    getItemElementStyleClass: function () {
      return this._ITEM_ELEMENT_STYLE_CLASS[this._getNavigationMode()];
    },
    /**
     * Returns Navlist specific collapse icon style class
     * @override
     */
    getCollapseIconStyleClass: function () {
      return "oj-navigationlist-collapse-icon";
    },
    /**
     * Returns Navlist specific expand icon style class
     * @override
     */
    getExpandIconStyleClass: function () {
      return "oj-navigationlist-expand-icon";
    },
    /**
     * Returns Navlist specific depth style class
     * @override
     */
    getDepthStyleClass: function (depth) {
      return "oj-navigationlist-depth-" + depth;
    },
    /**
     * Returns Navlist specific Group Item style class
     * @override
     */
    getGroupItemStyleClass: function () {
      return "oj-navigationlist-group-item";
    },
    /**
     * Returns Navlist specific Group style class
     * @override
     */
    getGroupStyleClass: function () {
      return "oj-navigationlist-group";
    },
    /**
     * Returns Navlist specific group expand style class
     * @override
     */
    getGroupExpandStyleClass: function () {
      return "oj-navigationlist-collapsible-transition";
    },
    /**
     * Returns Navlist specific group collapse style class
     * @override
     */
    getGroupCollapseStyleClass: function () {
      return this.getGroupExpandStyleClass();
    },
    
    /**
     * Override options default style class
     * @return {string} the option defaults style class
     */
    getOptionDefaultsStyleClass: function() {
        return this._OPTION_DEFAULT_STYLE_CLASS[this._getNavigationMode()];
    },    
    /**
     * Override expand animation behaviour to support differnet types of navlists.
     * Returns a Promise that resolves when animation completes
     * @override
     * @protected
     */
    AnimateExpand: function (groupItem, animate, event) {
      return this.m_listHandler.Expand(groupItem, animate, event);
    },
    /**
     * Override collapse animation behaviour to support differnet types of navlists.
     * Returns a Promise that resolves when animation completes
     * @override
     * @protected
     */
    AnimateCollapse: function (item, key, animate, event) {
      return this.m_listHandler.Collapse(item, key, animate, event);
    },
    /**
     * Handles arrow keys navigation on item
     * @param {number} keyCode description
     * @param {boolean} isExtend
     * @param {Event} event the DOM event causing the arrow keys
     * @override
     * @protected
     */
    HandleArrowKeys: function (keyCode, isExtend, event) {
      return this.m_listHandler.HandleArrowKeys(keyCode, isExtend, event);
    },
    /**
     * Determine whether the key code is an arrow key
     * @param {number} keyCode
     * @return {boolean} true if it's an arrow key, false otherwise
     * @override
     * @protected
     */
    IsArrowKey: function (keyCode) {
      return this.m_listHandler.IsArrowKey(keyCode);
    },
    /**
     * Determines whether the specified item is expanded
     * @param {jQuery} item the item element
     * @return {number} 0 if item is expanded, 1 if item is collapsed, 2 if item cannot be expand or collapse.
     * @override
     * @protected
     */
    GetState: function (item) {
      return this.m_listHandler.GetState(item);
    },
    /**
     * Sets the disclosed state of the item
     * @param {jQuery} item the item element
     * @param {number} state 0 if item is expanded, 1 if item is collapsed, 2 if item cannot be expand or collapse.
     * @override
     * @protected
     */
    SetState: function (item, state) {
      this.m_listHandler.SetState(item, state);
    },

    /**
     * Override to expand and collapse events on clicking item instead of icon. Also avoids expand/collapse when user click on arbitrary clickable elements.
     * @override
     * @protected
     */
    HandleMouseClick: function (event) {
      var item = this.FindItem($(event.target));
      if (item == null || item.length === 0) {
        // can't find item or if item cannot be focus
        return;
      }
      if (this.SkipFocus(item)) {
        event.preventDefault();
        return;
      }

      //TODO , once it is fixd in listview probably don't need to override HandleMouseClick

      if (this.IsNodeEditableOrClickable($(event.target))) {
        return;
      }

      var itemContent = this.getItemContentElement(item);
      var url = itemContent.attr('href');
      if (url && url !== "#") {
        if (event.button === 0 && (event.shiftKey || event.ctrlKey)) {
          return; // Do nothing, as Browser will launch  target it in new tab or browser
        }
      }

      _ojNavigationListView.superclass.HandleMouseClick.apply(this, arguments);
      event.preventDefault();
    },
    /**
     * Override to support flip left/right arrows for expand and collapse actions.
     * @override
     * @protected
     */
    HandleKeyDown: function (event) {
      var keyCode, current, currentItemKey;
      if (!this.m_active) {
        //If there is no active item, generally happes when user click on disabled item 
        //and immediately press a key.
        return;
      }
      keyCode = event.keyCode;
      current = this.m_active['elem'];
      currentItemKey = this.m_active['key'];

      if (keyCode === $.ui.keyCode.HOME || keyCode === $.ui.keyCode.END) {
        var item;
        if (keyCode === $.ui.keyCode.HOME) {
          item = this.element.find('.' + this.getItemContentStyleClass() + ':visible').first().closest('.' + this.getItemElementStyleClass());
        } else {
          item = this.element.find('.' + this.getItemContentStyleClass() + ':visible').last().closest('.' + this.getItemElementStyleClass());
        }
        this.SetCurrentItem(item, event);
        event.preventDefault();
      } else {
        var processed = this.HandleSelectionOrActiveKeyDown(event);
        var processExpansion = this.m_listHandler.HandleExpandAndCollapseKeys(event, keyCode, current, currentItemKey);
        if (processed === true || processExpansion === true) {
          event.preventDefault();
        }
      }
    },

    AvoidFocusHighLight: function (flag) {
      this._avoidFocusHighLight = flag;
    },
    
    /**
     * check Whether recent pointer acivity happened or not. 
     * Only used for sliding navlist to avoid focus ring on new focusable item
     * after completing expand/collapse animation.
     * @protected
     * @override
     */
    RecentPointerCallback: function () {
      var self = this;
      return function () {
        return !!(self._avoidFocusHighLight);
      };
    },
    /**
     * Whether focus highlight should be applied
     * @return {boolean} true if should apply focus highlight, false otherwise
     * @protected
     */
    ShouldApplyHighlight: function () {
      return true;
    },
    /**
     * Override to trigger beforeSelect event when user selecets an item.
     * @override
     * @protected
     */
    ToggleSelection: function (event, keepCurrentSelection, skipIfNotSelected) {
      var item = this.m_active['elem'];

      if (!this.IsSelectable(item[0])) {
        return;
      }
      if (this._isSelected(item)) {
        return;
      }
      var shouldSelect = this._fireBeforeSelectEvent(event, item);
      if (shouldSelect) {
        _ojNavigationListView.superclass.ToggleSelection.apply(this, arguments);
        this._initiateNavigation(item);
      }
    },
    /**
     * Highlight or unhighlight an element
     * @param {jQuery|Element} elem the element the highlight or unhighlight
     * @param {string} style the style to add or remove
     * @param {boolean} highlight true if it's to highlight, false if it's to unhighlight
     * @override
     * @protected
     */
    HighlightUnhighlightElem: function (elem, style, highlight) {
      var group;

      elem = $(elem);

      if (style === "oj-selected") {
        this.m_listHandler.UpdateAriaPropertiesOnSelectedItem(this.getFocusItem(elem), highlight);
      }

      // if item is a group, the highlight should be apply to the group item element
      group = elem.children("." + this.getGroupItemStyleClass());
      if (group.length > 0) {
        elem = $(group[0]);
      }

      if (style === "oj-focus") {
        if (highlight) {
          this._focusInHandler(elem);
        } else {
          this._focusOutHandler(elem);
        }
      } else {
        if (highlight) {
          elem.addClass(style);
        } else {
          elem.removeClass(style);
        }
      }

      if (elem.hasClass('oj-selected') || elem.hasClass('oj-hover') || elem.hasClass('oj-active') || elem.hasClass('oj-disabled')) {
        elem.removeClass('oj-default');
      } else {
        elem.addClass('oj-default');
      }
    },
    /**
     * In Navlist,it is not gaurenteed that item will have aria-selected. So overriding it to make all items selectable.
     * @override
     * @protected
     */
    IsSelectable: function (item) {
      return !$(item).hasClass('oj-disabled') && this.m_listHandler.IsSelectable($(item));
    },
    /**
     * Override to skip firing events like ready which are not needed for navlist.
     * @override
     * @protected
     */
    Trigger: function (type, event, ui) {
      if (type !== 'ready') {
        return this.ojContext._trigger(type, event, ui);
      }
      return true;
    },
    /**
     * Override to convert selection option value from array to string before setting on component.
     * @override
     * @protected
     */
    SetOption: function (key, value, flags) {
      if (this.m_listHandler.IsOptionUpdateAllowed(key, value, flags)) {
        var modifiedValue = null;
        if (key === 'selection') { // selection Data type is different for listview and navlist
          //change items to item as navlist does't allow multiple selection.
          var context = flags['_context'],
            selectedItem = context && context.extraData && context.extraData['items'];
          if (selectedItem) {
            //extraData['items'] is a jquery object(not an array) and in case of navlist it will always have single item.
            context.extraData['item'] = this.ojContext._IsCustomElement() ? (selectedItem.length === 0 ? null: selectedItem[0]):selectedItem;
            context.extraData['items'] = undefined;
          }
          
          if (value && value.length > 0) {
            modifiedValue = value[0];
          }
        } else {
          modifiedValue = value;
        }

        // Common options
        this.ojContext.option(key, modifiedValue, flags);
        this.options[key] = value;
        this.m_listHandler.OptionUpdated(key, modifiedValue, flags);
      }
    },
    /**
     * Whether ListView should refresh if certain option is updated
     * @param {Object} options the options to check
     * @return {boolean} true if should refresh, false otherwise
     * @override
     * @protected
     */
    ShouldRefresh: function (options) {
      return (options['data'] != null ||
        options['drillMode'] != null ||
        options['item'] != null ||
        options['display'] != null ||
        options['edge'] != null);
    },


    /**
     * Sets multiple options
     * @param {Object} options the options object
     * @param {Object} flags additional flags for option
     * @return {Object} result result object holding skipUpdate and needRefresh flags.
     * @override
     */
    setOptions: function (options, flags) {
      var result = {
          skipOptions: []
        },
        newSelectionValue;

      this.m_listHandler.SetOptions(options);

      if (options['navigationLevel'] !== undefined) {
        this._setNavigationLevel(options['navigationLevel']);
      }
      if (options['selection'] !== undefined) {
        newSelectionValue = options['selection'];
      }
      result.needRefresh = _ojNavigationListView.superclass.setOptions.call(this, options, flags);
      if (newSelectionValue !==  undefined && options['selection'] === undefined) {
        result.skipOptions.push('selection');
      }
      //Restore original user provided selection value
      if (newSelectionValue !== undefined) {
        options['selection'] = newSelectionValue;
      }
      return result;
    },
    compareValues: function(value1, value2){
      return value1 == value2 || oj.Object.compareValues(value1, value2);
    },
    /**
     * Set Selection option.
     * @param {Object} options the options object
     * @override
     */
    HandleSelectionOption: function (options) {
      var newSelectionValue;
      if (options['selection'] !== undefined) {
        newSelectionValue = options['selection'];
        if (!!newSelectionValue) {
          var selection = this.GetOption('selection');
          if (!selection || selection.length === 0 || !this.compareValues(selection[0],newSelectionValue)) {
            var item = this.FindElementByKey(newSelectionValue);
            if (item && this.IsSelectable(item)) {
              var shouldSelect = this._fireBeforeSelectEvent(null, $(item));
              if (shouldSelect) {
                options['selection'] = [newSelectionValue];
                this._initiateNavigation($(item));
              } else {
                delete options['selection'];
              }
            } else {
              delete options['selection'];
            }
          } else {
            //When new value is same as existing one, no need to update it on listview. 
            delete options['selection'];
          }
        } else {
          options['selection'] = [];
        }
      }
      _ojNavigationListView.superclass.HandleSelectionOption.call(this, options);
    },
    /**
     * Override to convert selection option value from string to array before setting on component.
     * @override
     * @protected
     */
    GetOption: function (key) {
      var optionValue = this.ojContext.option(key);
      if (key === 'selection') { // selection Data type is different for listview and navlist
        if (optionValue) {
          return [optionValue];
        }
        return [];
      }
      if (optionValue === null) { // if the option is only applicable to listview
        return this.options[key];
      }
      return optionValue;
    },
    /**
     * Override to return widget constructor
     * @override
     */
    getWidgetConstructor: function () {
      return oj.Components.__GetWidgetConstructor(this.ojContext.element);
    },
    /**
     * Override to skip intermediate nodes(only in case of collapsible) and disabled items from selection.
     * @override
     * @protected
     */
    SelectAndFocus: function (item, event) {
      //Disabled items are not selectable and focuable.
      if (item.hasClass('oj-disabled')) {
        return;
      }

      if (!this.IsSelectable(item[0])) {
        return;
      }

      if (!this._isSelected(item) && this._fireBeforeSelectEvent(event, item)) {
        _ojNavigationListView.superclass.SelectAndFocus.apply(this, arguments);
        this._initiateNavigation(item);
      } else {
        //clicking on selected item/item whose selection is prevented should also get focus.
        this.HandleClickActive(item, event);

      }
    },
    _fireBeforeSelectEvent: function (event, item) {
      var key = this.GetKey(item[0]);
      return this.Trigger("beforeSelect", event, {
        item: item,
        key: key
      });
    },
    _initiateNavigation: function (item) {

      if (this.ojContext.element.hasClass(this.getNoFollowLinkStyleClass())) {
        return false;
      }

      var itemContent = this.getItemContentElement(item);
      var url = itemContent.attr('href');
      var target = itemContent.attr('target');;
      if (url && url !== "#") {
        //In case of javascript uri, javascript will get executed on assigning it to href.
        //Ideally user can use beforeSelect/optionChange events to do this,Will there be any issue in supporting this?
         if(!target || target === '_self') {
            window.location.href = url;
         } else {
            window.open(url, target);
         }
         
        return true;
      }
      return false;
    },
    _isSelected: function (item) {
      var selection, key;

      selection = this.GetOption("selection");
      key = this.GetKey(item[0]);
      if(selection && selection.length === 1 && this.compareValues(selection[0], key)) {
        return true;
      }
      return false;
    },
    _setToolTipOnIcon: function (icon, itemLabel) {
      if (!icon.attr('title')) {
        icon.attr('title', itemLabel);
      }
    },
    _removeToolTipOnIcon: function (icon) {
      if (!icon.data(this._NAVLIST_ITEM_ICON_HAS_TITLE)) {
        icon.removeAttr('title');
      } else {
        icon.removeData(this._NAVLIST_ITEM_ICON_HAS_TITLE);
      }
    },
    /**
     * Called by content handler once the content of an item is rendered
     * @param {Element} elem the item element
     * @param {Object} context the context object used for the item
     */
    itemRenderComplete: function (elem, context) {
      var $item = $(elem);
      if ($item.hasClass(this.getCategoryDividerStyleClass())) {
        $item.removeClass(this.getItemElementStyleClass());
        $item.removeClass(this.getFocusedElementStyleClass());
        $item.removeClass(this.getItemStyleClass());
        $item.removeAttr('aria-selected');
        $item.children().remove();
        $item.attr('role', 'separator');
        return;
      }
      var groupItemClass = this.getGroupItemStyleClass();
      var collapseIconClass = this.getCollapseIconStyleClass();
      var expandIconClass = this.getExpandIconStyleClass();
      var itemIconClass = this.getItemIconStyleClass();
      var groupItem = $item.children('.' + groupItemClass);
      var itemContent;
      if (groupItem.length > 0) {
        //Adding oj-navigationlist-item class on group node. Listview does't add this any more.
        groupItem.addClass(this.getItemStyleClass());
        itemContent = groupItem.children(':not(.' + expandIconClass + '):not(.' + collapseIconClass + ')');
        var groupIcon = groupItem.children('.' + expandIconClass);
        if (groupIcon.length === 0) {
          groupIcon = groupItem.children('.' + collapseIconClass);
        }
        groupIcon.attr('role', 'presentation');
        groupIcon.removeAttr('aria-labelledby');
        if ($item.hasClass('oj-disabled')) {
          groupItem.addClass('oj-disabled');
        }
      } else {
        itemContent = $item.children().first();
      }
      itemContent.addClass(this.getItemContentStyleClass());
      var icon = itemContent.wrapInner('<span class="' + this.getItemLabelStyleClass() + '"></span>').find('.' + itemIconClass); //@HTMLUpdateOK
      if (icon.length > 0) {
        icon.insertBefore(icon.parent()); // @HTMLUpdateOK

        if (icon.attr('title')) { // preserve the title to restore it after destroy.
          icon.data(this._NAVLIST_ITEM_ICON_HAS_TITLE, icon.attr('title'));
        }

        if (this.ojContext.options['display'] === 'icons') {
          this.ojContext.element.addClass(this.getIconOnlyStyleClass());
          var itemLabel = this.getItemLabel($item);
          icon.attr('aria-label', itemLabel);
          icon.attr('role', 'img');
          this._setToolTipOnIcon(icon, itemLabel);
        }

        $item.closest('ul').addClass(this.getHasIconsStyleClass());
      } else {
        itemContent.addClass(this.getHasNoIconStyleClass());
      }

      if ($item.hasClass('oj-disabled')) {
        this.getFocusItem($item).attr('aria-disabled', 'true');
      } else {
        if (groupItem.length > 0) {
          groupItem.addClass('oj-default');
        } else {
          $item.addClass('oj-default');
        }
      }
      this.m_listHandler.ModifyListItem($item, itemContent);
      _ojNavigationListView.superclass.itemRenderComplete.apply(this, arguments);

    },


    /**
     * Return node for given locator
     *
     * @override
     */
    getNodeBySubId: function (locator) {
      var subId, key, item = null;

      if (locator == null) {
        return this.ojContext.element ? this.ojContext.element[0] : null;
      }
      
      item = this.m_listHandler.GetNodeBySubId(locator);
      
      if(!item) {
        subId = locator['subId'];
        if (subId === this.getItemSubIdKey()) {
          key = locator['key'];
          item = this.FindElementByKey(key);
        }
      }

      return item;
    },
    /**
     * Returns the subId locator for the given child DOM node.
     * Invoked by widget
     * @param {!Element} node - child DOM node
     * @return {Object|null} The locator for the DOM node, or <code class="prettyprint">null</code> when none is found.
     */
    getSubIdByNode: function (node) {
      
      var item, key, subId = null;
	  
      if(node != null){
		  subId = this.m_listHandler.GetSubIdByNode(node);

		  if(!subId) {
			item = this.FindItem(node);
			if (item != null && item.length > 0) {
			  key = this.GetKey(item[0]);
			  if (key != null) {
				subId = {
				  'subId': this.getItemSubIdKey(),
				  'key': key
				};
			  }
			}
		  }
	  }
      return subId;
    },
    /**
     * Returns an object with context for the given child DOM node. 
     * This will always contain the subid for the node, defined as the 'subId' property on the context object. 
     * Additional component specific information may also be included. For more details on returned objects, see context objects.
     * Invoked by widget
     *
     * @param {!Element} node the child DOM node
     * @returns {Object|null} the context for the DOM node, or null when none is found.
     */
    getContextByNode: function (node) {
      var context = _ojNavigationListView.superclass.getContextByNode.call(this, node);
      if (context && context['subId'] == 'oj-listview-item') {
        context['subId'] = this.getItemSubIdKey();
        return context;
      }
      return null;
    },
    /**
     * Refresh navlist
     * @override
     */
    refresh: function () {
      this._resetNavlist();
      this._initListHandler();
      _ojNavigationListView.superclass.refresh.apply(this, arguments);
    },
    /**
     * Uninitialize dom.
     * @private
     */
    _resetNavlist: function () {
      this.ojContext.element.removeClass(this.getIconOnlyStyleClass());
      this.ojContext.element.removeClass(this._APPLICATION_LEVEL_NAV_STYLE_CLASS);
      this.ojContext.element.removeClass(this._PAGE_LEVEL_NAV_STYLE_CLASS);
      this._restoreContent(this.element);
      this.m_listHandler.Destroy();
    },
    /**
     * Destroy the Navigation List
     * @override
     */
    destroy: function () {
      this._resetNavlist();
      _ojNavigationListView.superclass.destroy.apply(this, arguments);
      this._list.unwrap();
      //for data source, this will be empty.
      if (this._list.is(':empty')) {
        this._list.remove();
      }
      this.ojContext.element.removeClass(this.getNavListStyleClass() + ' ' + this.getNavListTouchStyleClass());
      this.ojContext._off(this.element, "click");
      this.ojContext._off(this.element, "focus");
      this.ojContext._off(this.element, "blur");
      this.ojContext._off(this.element, "mouseover");
      this.ojContext._off(this.element, "mousein");
      this.ojContext._off(this.element, "mouseout");
      this.ojContext._off(this.element, "keydown");
    }

  });

/**
 * Copyright (c) 2014, Oracle and/or its affiliates.
 * All rights reserved.
 */
(function () {
  /**
   * @ojcomponent oj.ojNavigationList
   * @augments oj.baseComponent
   * @since 1.1.0
   *
   * @classdesc
   * <h3 id="navlistOverview-section">
   *   JET Navigation List
   *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#navlistOverview-section"></a>
   * </h3>
   *
   * <p>Description: JET Navigation List enhances a HTML list element into a themable, WAI-ARIA compliant, mobile friendly component with advance interactive features.
   *
   * <p>The JET Navigation List gets its data in following ways. </p>
   * <ul>
   * <li><b>Using table datasource</b>. This is typically used in case of flat list. There are several types of TableDataSource that
   * are available out of the box like <a href="oj.ArrayTableDataSource.html">oj.ArrayTableDataSource</a>,<a href="oj.CollectionTableDataSource.html">oj.CollectionTableDataSource</a>. <p> NOTE: oj.PagingTableDataSource is not supported by navigation list.
   * For large amount of data, It is recommended to use hierarhcial navigation list with tree data source.</li>
   * <li><b>Using TreeDataSource</b>.  This is typically used to display hierarchical navigation list.  There are several types
   * of TreeDataSource that are available out of the box like <a href="oj.JsonTreeDataSource.html">oj.JsonTreeDataSource</a>, <a href="oj.CollectionTreeDataSource.html">oj.CollectionTreeDataSource</a> </li>
   * <li><b>Using static content </b>. The structure of the content can be either flat or hierarhical.</li>
   * </ul>
   * <p>Example of flat static content</p>
   * <pre class="prettyprint">
   * <code>
   * &lt;oj-navigation-list>
   *  &lt;ul>
   *   &lt;li>&lt;a href="#">Item 1&lt;/a>&lt;/li>
   *   &lt;li>&lt;a href="#">Item 2&lt;/a>&lt;/li>
   *   &lt;li>&lt;a href="#">Item 3&lt;/a>&lt;/li>
   *  &lt;/ul>
   * &lt;/oj-navigation-list>
   * </code></pre>
   *
   * <p>Example of hierarchical static content</p>
   * <pre class="prettyprint">
   * <code>
   * &lt;oj-navigation-list>
   *  &lt;ul >
   *   &lt;li>&lt;a href="#">Item 1&lt;/a>&lt;/li>
   *   &lt;li>&lt;a href="#">Item 2&lt;/a>&lt;/li>
   *   &lt;li>&lt;a href="#">Item 3&lt;/a>
   *     &lt;ul>
   *       &lt;li>&lt;a href="#">Item 3-1&lt;/a>&lt;/li>
   *       &lt;li>&lt;a href="#">Item 3-2&lt;/a>&lt;/li>
   *       &lt;li>&lt;a href="#">Item 3-3&lt;/a>&lt;/li>
   *       &lt;li>&lt;a href="#">Item 3-4&lt;/a>&lt;/li>
   *       &lt;li>&lt;a href="#">Item 3-5&lt;/a>&lt;/li>
   *     &lt;/ul>
   *   &lt;/li>
   *   &lt;li>&lt;a href="#">Item 4&lt;/a>&lt;/li>
   *   &lt;li>&lt;a href="#">Item 5&lt;/a>&lt;/li>
   *  &lt;/ul>
   * &lt;/oj-navigation-list>
   * </code></pre>
   * <h4 id="treeJSON-section"> JSON Tree Node Format</h4>
   * </br>
   * Each node object typically have an
   * <code class="prettyprint">attr</code> property. This attr value will be provided as <code class="prettyprint">itemContext.data</code> to renderer function. See <a href="#itemContext">itemContext</a> section. Any node can be defined as a parent by supplying
   * a <code class="prettyprint">children</code> property, which is an array of one or more node definitions.
   * (Note: lazy-loading is not supported in navigation list so <code class="prettyprint">children</code> property should be a non empty array)
   * <p>Example: Basic JSON Tree definition
   * <pre class="prettyprint">
   * <code>
   *[
   *   {
   *     "attr": {
   *               "id": "home",
   *               "title": "Home"
   *             },
   *   },
   *   {
   *     "attr": {
   *               "id": "news",
   *               "title": "News"
   *             }
   *   },
   *   {
   *      "attr": {
   *                "id": "blogs",
   *                "title": "Blogs"
   *              },
   *      "children": [ {
   *
   *                       "attr": {
   *                                   "id": "today",
   *                                   "title": "Today"
   *                               }
   *                    },
   *                    {
   *                       "attr": {
   *                                   "id": "yesterday",
   *                                   "title": "Yesterday"
   *                               }
   *                    }
   *                  ]
   *   }
   *]
   *</code></pre>
   *</p></br>
   * <p>Any list item can be disabled by adding the <code class="prettyprint">oj-disabled</code> class to that element.  As with any DOM change, doing so post-init
   * requires a <code class="prettyprint">refresh()</code> of the element.
   * 
   * <h3 id="key-section">
   *   Key
   *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#key-section"></a>
   * </h3>
   * <p>Key is an identifier which uniquely identifies an item in Navigation List. 
   *  <ul>
   *  <li>When static html is used, it will be the <code class="prettyprint">id</code> attribute of <code class="prettyprint">&lt;li></code>. If no <code class="prettyprint">id</code> is specified then component will generate an id and will use it as key.</li>
   *  <li>When data source is used, it will be the <code class="prettyprint">id</code> attribute of item's data object.
   *  </ul>
   * <h3 id="icons-section">
   *   Icons
   *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#icons-section"></a>
   * </h3>
   *
   * <p>Sublist icons are inserted automatically.  To add other icons to list items, include them in the markup and include the <code class="prettyprint">oj-navigationlist-item-icon</code> class, as follows:
   *
   * <pre class="prettyprint">
   * <code>&lt;oj-navigation-list>
   *   &lt;ul>    
   *     &lt;li id="foo">&lt;a href="#">&lt;span class="oj-navigationlist-item-icon demo-icon-font-24 demo-palette-icon-24">&lt;/span>Foo&lt;/a>&lt;/li>
   *   &lt;/ul>
   *  &lt;/oj-navigation-list>
   * </code></pre>
   *
   * <h3 id="styling-section">
   *   Styling
   *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#styling-section"></a>
   * </h3>
   *
   * {@ojinclude "name":"stylingDoc"}
   * <h3 id="touch-section">
   *   Touch End User Information
   *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#touch-section"></a>
   * </h3>
   *
   * {@ojinclude "name":"touchDoc"}
   *
   * <h3 id="keyboard-section">
   *   Keyboard End User Information
   *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#keyboard-section"></a>
   * </h3>
   * {@ojinclude "name":"keyboardDoc"}
   *
   * <p>Disabled items will not receive keyboard focus and do not allow any interaction.
   *
   *<h3 id="context-section">
   *   Item Context
   *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#context-section"></a>
   * </h3>
   *
   * <p>For all item options, developers can specify a function as the return value.  The function takes a single argument, which is an object that contains contextual information about the particular item.  This gives developers the flexibility to return different value depending on the context.</p>
   *
   * <p>The context paramter contains the following keys:</p>
   * <table class="keyboard-table">
   *   <thead>
   *     <tr>
   *       <th>Key</th>
   *       <th>Description</th>
   *     </tr>
   *   </thead>
   *   <tbody>
   *     <tr>
   *       <td><kbd>componentElement</kbd></td>
   *       <td>oj-navigation-list element.</td>
   *     </tr>
   *     <tr>
   *       <td><kbd>datasource</kbd></td>
   *       <td>A reference to the data source object. (Not available for static content)</td>
   *     </tr>
   *     <tr>
   *       <td><kbd>index</kbd></td>
   *       <td>The index of the item, where 0 is the index of the first item.  In the hierarchical case the index is relative to its parent.</td>
   *     </tr>
   *     <tr>
   *       <td><kbd>key</kbd></td>
   *       <td>The <a href="#key-section">Key</a> of the item.</td>
   *     </tr>
   *     <tr>
   *       <td><kbd>data</kbd></td>
   *       <td>The data object for the item.</td>
   *     </tr>
   *     <tr>
   *       <td><kbd>parentElement</kbd></td>
   *       <td>The list item element.  The renderer can use this to directly append content.</td>
   *     </tr>
   *   </tbody>
   * </table>
   *
   * <p></p>
   * <p>If the data is hierarchical, the following additional contextual information are available:</p>
   * <table class="keyboard-table">
   *   <thead>
   *     <tr>
   *       <th>Key</th>
   *       <th>Description</th>
   *     </tr>
   *   </thead>
   *   <tbody>
   *     <tr>
   *       <td><kbd>depth</kbd></td>
   *       <td>The depth of the item.  The depth of the first level children under the invisible root is 1.</td>
   *     </tr>
   *     <tr>
   *       <td><kbd>parentKey</kbd></td>
   *       <td>The <a href="#key-section">Key</a> of the parent item.  The parent key is null for root node.</td>
   *     </tr>
   *     <tr>
   *       <td><kbd>leaf</kbd></td>
   *       <td>Whether the item is a leaf or a group item.</td>
   *     </tr>
   *   </tbody>
   * </table>
   * <h3 id="perf-section">
   *   Performance
   *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#perf-section"></a>
   * </h3>
   *
   * <h4>Data Set Size</h4>
   * <p>As a rule of thumb, it's recommended that applications limit the amount of data to display.  Displaying large
   * number of items in Navigation List makes it hard for user to find what they are looking for, but affects the load time.
   * If displaying large number of items is neccessary, it is recommended to group the items in to hierarchial navigation list.
   *
   * <h4>Item Content</h4>
   * <p>Navigation List allows developers to specify arbitrary content inside its item. In order to minimize any negative effect on
   * performance, you should avoid putting a large number of heavy-weight components inside because as you add more complexity
   * to the structure, the effect will be multiplied because there can be many items in the Navigation List.</p>
   *
   * <h4>Expand All</h4>
   * <p>While Navigation List provides a convenient way to initially expand all group items, it might have an impact
   * on the initial rendering performance since expanding each group item might cause a fetch from the server depending on
   * the TreeDataSource.  Other factors that could impact performance includes the depth of the tree, and the number of children
   * in each level.</p>
   *
   * <h3 id="a11y-section">
   *   Accessibility
   *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#a11y-section"></a>
   * </h3>
   * <p>See also the <a href="#styling-section">oj-focus-highlight</a> discussion.
   * <p>Disabled content: JET supports an accessible luminosity contrast ratio,
   * as specified in <a href="http://www.w3.org/TR/WCAG20/#visual-audio-contrast-contrast">WCAG 2.0 - Section 1.4.3 "Contrast"</a>,
   * in the themes that are accessible.  (See the "Theming" chapter of the JET Developer Guide for more information on which
   * themes are accessible.)  Note that Section 1.4.3 says that text or images of text that are part of an inactive user
   * interface component have no contrast requirement.  Because disabled content may not meet the minimum contrast ratio
   * required of enabled content, it cannot be used to convey meaningful information.<p>
   *
   *
   * <h3 id="rtl-section">
   *   Reading direction
   *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#rtl-section"></a>
   * </h3>
   *
   * <p>The only supported way to set the reading direction (LTR or RTL) is to set the <code class="prettyprint">"dir"</code> attribute on the
   * <code class="prettyprint">&lt;html></code> element of the page.  As with any JET custom element, in the unusual case that the reading direction
   * is changed post-init, the navigation list must be <code class="prettyprint">refresh()</code>ed, or the page must be reloaded.
   *
   *
   * <h3 id="animation-section">
   *   Animation
   *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#animation-section"></a>
   * </h3>
   *
   * <p>Applications can customize animations triggered by actions in Navigation List by either listening for <code class="prettyprint">animateStart/animateEnd</code>
   *    events or overriding action specific style classes on the animated item.  See the documentation of <a href="oj.AnimationUtils.html">oj.AnimationUtils</a> 
   *    class for details.</p>
   *
   * <p>The following are actions and their corresponding sass variables in which applications can use to customize animation effects.  
   * <table class="keyboard-table">
   *   <thead>
   *     <tr>
   *       <th>Action</th>
   *       <th>Sass Variable</th>
   *       <th>Description</th>
   *     </tr>
   *   </thead>
   *   <tbody>
   *     <tr>
   *       <td rowspan="2"><kbd>add</kbd></td>
   *       <td>$navigationListHorizontalAddAnimation</td>
   *       <td>When a new item is added to the oj.TableDataSource associated with Horizontal Navigation List.</td>
   *     </tr>
   *     <tr>
   *       <td>$navigationListAddAnimation</td>
   *       <td>When a new item is added to the oj.TableDataSource associated with Vertical Navigation List.</td>
   *     </tr>
   *     <tr>
   *       <td rowspan="2"><kbd>remove</kbd></td>
   *       <td>$navigationListHorizontalRemoveAnimation</td>
   *       <td>When an existing item is removed from the oj.TableDataSource associated with Horizontal Navigation List.</td>
   *     </tr>
   *     <tr>
   *       <td>$navigationListRemoveAnimation</td>
   *       <td>When an existing item is removed from the oj.TableDataSource associated with Vertical Navigation List.</td>
   *     </tr>   
   *     <tr>
   *       <td><kbd>update</kbd></td>
   *       <td>$navigationListUpdateAnimation</td>
   *       <td>When an existing item is updated in the oj.TableDataSource associated with Navigation List.</td>
   *     </tr>
   *     <tr>
   *       <td rowspan="2"><kbd>expand</kbd></td>
   *       <td>$navigationListExpandAnimation</td>
   *       <td>When user expands a group item.</td>
   *     </tr>
   *       <td>$navigationListSliderExpandAnimation</td>
   *       <td>When user expands a group item in sliding navigation list.</td>
   *     </tr>   
   *     <tr>
   *       <td rowspan="2"><kbd>collapse</kbd></td>
   *       <td>$navigationListCollapseAnimation</td>
   *       <td>When user collapses a group item.</td>
   *     </tr>
   *     <tr>
   *       <td>$navigationListSliderCollapseAnimation</td>
   *       <td>When user collapses a group item in sliding navigation list.</td>
   *     </tr>   
   *     <tr>
   *       <td><kbd>pointerUp</kbd></td>
   *       <td>$navigationListPointerUpAnimation</td>
   *       <td>When user finish pressing an item (on touch).</td>
   *     </tr>
   *   </tbody>
   * </table>
   *
   */
  oj.__registerWidget("oj.ojNavigationList", $['oj']['baseComponent'], {
    widgetEventPrefix: 'oj',
    options: {
      /**
       * <a href="#key-section">Key</a> of the current item.  Current item is the list item which is having active focus.  Note that if currentItem
       * is set to an item that is currently not available (not fetched or
       * inside a collapsed parent node), then the value is ignored.
       *
       * @expose
       * @public
       * @instance
       * @memberof! oj.ojNavigationList
       * @type {Object|string}
       * @default <code class="prettyprint">null</code>
       * @ojwriteback
       * @example <caption>Initialize the Navigation List with the <code class="prettyprint">current-item</code> attribute specified:</caption>
       *  &lt;oj-navigation-list current-item='settings'> ... &lt;/oj-navigation-list>
       * @example <caption>Get the current item:</caption>
       * var currentItem = myNavList.currentItem;
       *
       * @example <caption>Set the current item on the NavigationList during initialization:</caption>
       * myNavList.currentItem = "newItem";
       */
      currentItem: null,
      /**
       * Defines style of navigation used to drill down hierarchical list items.
       * <ul>
       * <li>none</li>
       * <li>collapsible</li>
       * <li>sliding</li>
       * </ul>
       *
       * @expose
       * @memberof oj.ojNavigationList
       * @instance
       * @type {string}
       * @default <code class="prettyprint">"none"</code>
       * @ojvalue {string} "none" All group items are expanded by default and user not allowed to collapse them.
       * @ojvalue {string} "collapsible" Allows user to expand and collapse group items. If there are more than two levels in hierarchy, <code class="prettyprint">sliding</code> is preferered drill mode.
       * @ojvalue {string} "sliding" This is typically used for hierarchical lists. This allows user to view one level at a time.
       *
       * @example <caption>Initialize the Navigation List with the <code class="prettyprint">drill-mode</code> attribute specified:</caption>
       *  &lt;oj-navigation-list drill-mode='collapsible'> ... &lt;/oj-navigation-list>
       *  
       * @example <caption>Set <code class="prettyprint">drillMode</code> property:</caption>
       * myNavList.drillMode = "collapsible";
       *
       * @example <caption>Get the <code class="prettyprint">drillMode</code> property:</caption>
       * // getter
       * var drillMode = myNavList.drillMode;
       */
      drillMode: "none",
      /**
       * The position of the Navigation List. Valid Values: top and start.
       * <p> NOTE: when value is <code class="prettyprint">top</code>,<code class="prettyprint">"none"</code> is the only supported drillMode and it also does't support hierarchical items.
       * @expose
       * @name edge
       * @memberof oj.ojNavigationList
       * @instance
       * @type {string|null}
       * @ojvalue {string} "top" This renders list items horizontally.
       * @ojvalue {string} "start" This renders list items vertically.
       * @default <code class="prettyprint">"start"</code>
       * @example <caption>Initialize the Navigation List with the <code class="prettyprint">edge</code> attribute specified:</caption>
       *  &lt;oj-navigation-list edge='top'> ... &lt;/oj-navigation-list>
       *  
       * @example <caption>Get the edge:</caption>
       * var edge = myNavList.edge;
       *
       * @example <caption>Set the edge on the Navigation List:</caption>
       * myNavList.edge = "top";
       */
      edge: "start",
      /**
       * Specifies the level at which user can see hiearchical menu button.This is only valid when <code class="prettyprint">drillMode</code> set to <code class="prettyprint">sliding</code>.
       * Default value is 0, shows hiearchical menu always. If value is -1, then it will never be shown.
       *
       * <p>The default value for hierarchyMenuThreshold varies by theme.  Each theme can set its default by setting
       * <code class="prettyprint">$navigationListHierarchyMenuDisplayThresholdLevelOptionDefault</code> as seen in the example below.
       *
       * @expose
       * @name hierarchyMenuThreshold
       * @memberof oj.ojNavigationList
       * @instance
       * @type {number|null}
       * @default Varies by theme. <code class="prettyprint">"0"</code> if not specified in theme.
       * 
       * @example <caption>Initialize the Navigation List with the <code class="prettyprint">hierarchy-menu-threshold</code> attribute specified:</caption>
       *  &lt;oj-navigation-list hierarchy-menu-threshold='4'> ... &lt;/oj-navigation-list>
       *  
       * @example <caption>Get or set the <code class="prettyprint">hierarchyMenuThreshold</code> property:</caption>
       * // getter
       * var hierarchyMenuThreshold = myNavList.hierarchyMenuThreshold;
       *
       * // setter
       * myNavList.hierarchyMenuThreshold = "4";
       *
       * @example <caption>Set the default in the theme (SCSS) :</caption>
       * $navigationListHierarchyMenuDisplayThresholdLevelOptionDefault: -1 !default;
       */
      hierarchyMenuDisplayThresholdLevel: 0,
      /**
       * Label for top level list items.
       * <p>NOTE: This is needed only for sliding navigation list where
       * this will be used as title for the top level list elements.
       * @type {?string}
       * @default <code class="prettyprint">Navigation List</code>
       * @expose
       * @instance
       * @memberof oj.ojNavigationList
       * @example <caption>Initialize the Navigation List with the <code class="prettyprint">root-label</code> attribute specified:</caption>
       *  &lt;oj-navigation-list root-label='Global Navigation'> ... &lt;/oj-navigation-list>
       *  
       * @example <caption>Get or set the <code class="prettyprint">rootLabel</code> property:</caption>
       * // getter
       * var rootLabel = myNavList.rootLabel;
       *
       * // setter
       * myNavList.rootLabel = "4";
       */
      rootLabel: null,
      /**
       * Item <a href="#key-section">Key</a> of currently selected list item. If the value is modified
       * by an application, navigation list UI is modified to match the new value.
       * @type {Object|string}
       * @default <code class="prettyprint">null</code>
       * @expose
       * @instance
       * @memberof oj.ojNavigationList
       * @ojwriteback
       * @example <caption>Initialize the Navigation List with the <code class="prettyprint">selection</code> attribute specified:</caption>
       *  &lt;oj-navigation-list selection='settings'> ... &lt;/oj-navigation-list>
       *  
       * @example <caption>Get the selection:</caption>
       * var selection = myNavList.selection;
       *
       * @example <caption>Set the selection on the Navigation List:</caption>
       * myNavList.selection = "settings";
       */
      selection: null,
      /**
       * Specifies which items in NavigationList should be expanded. Specifies "all" value to expand all items.  Specifies
       * an array of <a href="#key-section">Key</a>s to expand specific items.
       *
       * The default value is "auto", which means that NavigationList will determine which items are expanded by default.
       * Specifically, if drillMode is set to "none", then all items are expanded, any other values for
       * drillMode will not cause any items to expand by default.
       *
       * Note that expanded does not return the currently expanded items.  This only returns what is specified
       * by default.  To retrieve the keys of currently expanded items, use the <code class="prettyprint">getExpanded</code>
       * method.
       * @type {Array|string}
       * @default <code class="prettyprint">[]</code>
       * @ignore
       * @instance
       * @memberof oj.ojNavigationList
       * @example <caption>Initialize the Navigation List with the <code class="prettyprint">expanded</code> attribute specified:</caption>
       *  &lt;oj-navigation-list expanded='all'> ... &lt;/oj-navigation-list>
       *  
       * @example <caption>Get the expanded:</caption>
       * var expanded = myNavList.expanded;
       *
       * @example <caption>Set the expanded on the Navigation List:</caption>
       * myNavList.expanded = ["settings"];
       */
      expanded: "auto",
      /**
       * The data source for the NavigationList accepts either a oj.TableDataSource or oj.TreeDataSource.
       * See the data source section in the introduction for out of the box data source types.
       * If the data attribute is not specified, the child elements are used as content.  If there's no
       * content specified, then an empty list is rendered.
       *
       * @expose
       * @memberof! oj.ojNavigationList
       * @instance
       * @type {oj.TableDataSource|oj.TreeDataSource}
       * @default <code class="prettyprint">null</code>
       * @example <caption>Initialize the Navigation List with the <code class="prettyprint">data</code> attribute specified:</caption>
       *  &lt;oj-navigation-list data='[[tableDataSource]]'> ... &lt;/oj-navigation-list>
       * @example <caption>Get the data:</caption>
       * var dataSource = myNavList.data;
       *
       * @example <caption>Set the data attribute using one-dimensional array:</caption>
       * myNavList.data = new oj.ArrayTableDataSource([1,2,3]);
       * 
       * @example <caption>Set the data attribute using oj.Collection:</caption>
       * myNavList.data = new oj.CollectionTableDataSource(collection);
       */
      data: null,
      /**
       * Whether to display both the label and icons (<code class="prettyprint">"all"</code>) or just the icons (<code class="prettyprint">"icons"</code>).
       * In the latter case, the label is displayed in a tooltip instead, unless a tooltip was already supplied at create time.
       * Note: <code class="prettyprint">display="icons"</code> is valid only when <code class="prettyprint">drillMode=none</code> and navigation list is a flat list.
       * It is also mandatory to provide icons for each item as stated in <a href="#icons-section">icons section</a>.
       *
       * @expose
       * @memberof oj.ojNavigationList
       * @instance
       * @type {string}
       * @ojvalue {string} "all" Display both the label and icons.
       * @ojvalue {string} "icons" Display only the icons.
       * @default <code class="prettyprint">"all"</code>
       * @example <caption>Initialize the Navigation List with the <code class="prettyprint">display</code> attribute specified:</caption>
       *  &lt;oj-navigation-list display='icons'> ... &lt;/oj-navigation-list>
       * 
       * @example <caption>Get or set the <code class="prettyprint">display</code> property:</caption>
       * // getter
       * var display = myNavList.display;
       *
       * // setter
       * myNavList.display = "icons";
       */
      display: "all",
      /**
       * Navigation List supports two different look-and-feel depends on its usage level, one is <code class="prettyprint">application</code> level and other is <code class="prettyprint">page</code> level.
       *
       * @expose
       * @ignore
       * @deprecated Use <code class="prettyprint">oj-navigation-tabs</code> custom element for <code class="prettyprint">page</code> level navigation list. In future <code class="prettyprint">ojNavigationList</code> will only support <code class="prettyprint">application</code> level by default.
       * @memberof oj.ojNavigationList
       * @instance
       * @type {string}
       * @ojvalue {string} "application" Render Navigation List for application level navigation.
       * @ojvalue {string} "page" Render Navigation List for page level navigation.
       * @default <code class="prettyprint">"page"</code>
       *
       * @example <caption>Initialize the NavigationList with the <code class="prettyprint">navigationLevel</code> option specified:</caption>
       *  &lt;oj-navigation-list navigation-level='application'> ... &lt;/oj-navigation-list>
       *
       * @example <caption>Get or set the <code class="prettyprint">navigationLevel</code> option, after initialization:</caption>
       * // getter
       * var display = navList.navigationLevel;
       *
       * // setter
       * navList.navigationLevel = "application";
       */
      navigationLevel: "page",
       /**
       * Specifies the overflow behaviour. 
       * NOTE: This is only applicable when <code class="prettyprint">edge</code> attribute set to <code class="prettyprint">top</code>
       * @expose
       * @memberof oj.ojNavigationList
       * @instance
       * @type {string}
       * @ojvalue {string} "popup" popup menu will be shown with overflowed items.
       * @ojvalue {string} "hidden" overflow is clipped, and the rest of the content will be invisible.
       * @default <code class="prettyprint">"hidden"</code>
       * @since 3.0.0
       * @example <caption>Initialize the Navigation List with the <code class="prettyprint">overflow</code> attribute specified:</caption>
       *  &lt;oj-navigation-list overflow='popup'> ... &lt;/oj-navigation-list>
       * @example <caption>Get or set the <code class="prettyprint">overflow</code> property:</caption>
       * // getter
       * var overflow = myNavList.overflow;
       *
       * // setter
       * myNavList.overflow = "hidden";
       */
      overflow: "hidden",
      /**
       * The item property contains a subset of properties for items.
       *
       * @expose
       * @memberof! oj.ojNavigationList
       * @instance
       */
      item: {
        /**
         * The renderer function that renders the content of the item. See <a href="#context-section">itemContext</a>
         * in the introduction to see the object passed into the renderer function.
         * The function should return one of the following: 
         * <ul>
         *   <li>An Object with the following property:
         *     <ul><li>insert: HTMLElement | string - A string or a DOM element of the content inside the item.</li></ul>
         *   </li>
         *   <li>undefined: If the developer chooses to manipulate the item element directly, the function should return undefined.</li>
         * </ul>
         * If no renderer is specified, Navigation List will treat the data as a String.
         *
         * @expose
         * @alias item.renderer
         * @memberof! oj.ojNavigationList
         * @instance
         * @type {function(Object)|null}
         * @default <code class="prettyprint">null</code>
         * @example <caption>Initialize the Navigation List with the <code class="prettyprint">item.renderer</code> attribute specified:</caption>
         *  &lt;oj-navigation-list item.renderer="{{oj.KnockoutTemplateUtils.getRenderer('template', true)}}"> ... &lt;/oj-navigation-list>
         *  
         * @example <caption>Get or set the <code class="prettyprint">renderer</code> property:</caption>
         * // set the renderer function
         * myNavList.item.renderer = rendererFn;
         * 
         * // get the renderer function
         * var rendererFn = myNavList.item.renderer;
         */
        renderer: null,
        /**
         * Whether the item is selectable.
         * See <a href="#context-section">itemContext</a> in the introduction to see the object passed into the selectable function.
         *
         * @expose
         * @alias item.selectable
         * @memberof! oj.ojNavigationList
         * @instance
         * @type {function(Object)|boolean}
         * @default <code class="prettyprint">true</code>
         *
         * @example <caption>Initialize the NavigationList such that the first 3 items are not selectable:</caption>
         *  <oj-navigation-list item.selectable="[[skipFirstThreeElementsFn]]"></oj-navigation-list>
         *  
         *  var skipFirstThreeElementsFn = function(itemContext) {
         *                                      return itemContext['index'] > 3; 
         *                                 }
         */
        selectable: true

      },
      //Events
      /**
       * Triggered when the default animation of a particular action is about to start.  The default animation can be cancelled by calling event.preventDefault.
       *
       * @expose
       * @event
       * @memberof oj.ojNavigationList
       * @instance
       * @property {Object} action the action that starts the animation.  See <a href="#animation-section">animation</a> section for a list of actions.
       * @property {Object} element the target of animation.  
       * @property {function} endCallback if the event listener calls event.preventDefault to cancel the default animation, it must call the endCallback function when it finishes its own animation handling and when any custom animation ends.
       */
      animateStart: null,
      /**
       * Triggered when the default animation of a particular action has ended.  Note this event will not be triggered if application cancelled the default animation on animateStart.
       *
       * @expose
       * @event
       * @memberof oj.ojNavigationList
       * @instance
       * @property {Object} action the action that started the animation.  See <a href="#animation-section">animation</a> section for a list of actions.
       * @property {Object} element the target of animation.  
       */
      animateEnd: null,
      /**
       * <p>Triggered before this list item is selected.
       * To prevent the item selection, return <code class="prettyprint">false</code> from event handler or invoke <code class="prettyprint">event.preventDefault()</code>.
       * <p>The <code class="prettyprint">ui.key</code> contains item key which uniquely identifies the item.
       * <code class="prettyprint">ui.item</code> payload field contains item element being selected.
       *
       * @expose
       * @event
       * @memberof oj.ojNavigationList
       * @instance
       * @property {Object|string} key Selected list item <a href="#key-section">Key</a>.
       * @property {Element} item Selected list item.
       */
      beforeSelect: null,
      /**
       * Triggered before an item is collapse via the <code class="prettyprint">expanded</code> property,
       * the <code class="prettyprint">collapse</code> method, or via the UI.
       * To prevent the item being collapsed, return <code class="prettyprint">false</code> from event handler or invoke <code class="prettyprint">event.preventDefault()</code>.
       *
       * @expose
       * @event
       * @memberof oj.ojNavigationList
       * @instance
       * @property {Object|string} key the <a href="#key-section">Key</a> of the item to be collapse
       * @property {Element} item the item to be collapse
       */
      beforeCollapse: null,
      /**
       * Triggered before the current item is changed via the <code class="prettyprint">currentItem</code> property or via the UI.
       * To prevent the item being focused, return <code class="prettyprint">false</code> from event handler or invoke <code class="prettyprint">event.preventDefault()</code>.
       * @expose
       * @event
       * @memberof oj.ojNavigationList
       * @instance
       * @property {Object|string} previousKey the <a href="#key-section">Key</a> of the previous item
       * @property {Element} previousItem the previous item
       * @property {Object|string} key the <a href="#key-section">Key</a> of the new current item
       * @property {Element} item the new current item
       */
      beforeCurrentItem: null,
      /**
       * Triggered after an item has been collapsed via the <code class="prettyprint">expanded</code> property,
       * the <code class="prettyprint">collapse</code> method, or via the UI.
       *
       * @expose
       * @event
       * @memberof oj.ojNavigationList
       * @instance
       * @property {Object|string} key The <a href="#key-section">Key</a> of the item that was just collapsed.
       * @property {Element} item The list item that was just collapsed.
       */
      collapse: null,
      /**
       * Triggered before an item is expand via the <code class="prettyprint">expanded</code> property,
       * the <code class="prettyprint">expand</code> method, or via the UI.
       * To prevent the item being expanded, return <code class="prettyprint">false</code> from event handler or invoke <code class="prettyprint">event.preventDefault()</code>.
       * @expose
       * @event
       * @memberof oj.ojNavigationList
       * @instance
       * @property {Object|string} key the <a href="#key-section">Key</a> of the item to be expand
       * @property {Element} item the item to be expand
       */
      beforeExpand: null,
      /**
       * Triggered after an item has been expanded via the <code class="prettyprint">expanded</code> property,
       * the <code class="prettyprint">expand</code> method, or via the UI.
       *
       * @expose
       * @event
       * @memberof oj.ojNavigationList
       * @instance
       * @property {Object|string} key The <a href="#key-section">Key</a> of the item that was just expanded.
       * @property {Element} item The list item that was just expanded.
       */
      expand: null
    },
    /**
     * Create the Navigation List
     * @override
     * @memberof! oj.ojNavigationList
     * @protected
     */
    _ComponentCreate: function () {
      this._super();
      this._setup();
    },
    /**
     * Initialize the NavigationList after creation
     * @protected
     * @override
     * @memberof! oj.ojNavigationList
     */
    _AfterCreate: function () {
      this._super();
      
      // inject helper functions for ContentHandler and custom renderer to use
      var self = this;
      this.navlist._FixRendererContext = function(context) { return self._FixRendererContext(context); };
      this.navlist._WrapCustomElementRenderer = function(renderer) { return self._WrapCustomElementRenderer(renderer) };
      this.navlist.afterCreate();
    },
    /**
     * When the <a href="#contextMenu">contextMenu</a> option is set, this method is called when the user invokes the context menu via
     * the default gestures: right-click, pressHold, and <kbd>Shift-F10</kbd>.  Components should not call this method directly.
     *
     * @param {!Object} menu The JET Menu to open as a context menu.  Always non-<code class="prettyprint">null</code>.
     * @param {!Event} event What triggered the menu launch.  Always non-<code class="prettyprint">null</code>.
     * @param {string} eventType "mouse", "touch", or "keyboard".  Never <code class="prettyprint">null</code>.
     * @private
     */
    _NotifyContextMenuGesture: function (menu, event, eventType) {
      this.navlist.notifyContextMenuGesture(menu, event, eventType);
    },
    /**
     * Initialize DOM structure for navigation list.
     * @private
     * @memberof! oj.ojNavigationList
     */
    _setup: function () {
      var key, opts;
      this.navlist = new _ojNavigationListView();

      for (key in this.options) {
        this._validateOptionValues(key, this.options[key]);
      }
      this._validateOptionsForIconsOnlyAndHorizontalList(this.options[this.navlist.OPTION_DRILL_MODE], this.options[this.navlist.OPTION_DISPLAY], this.options[this.navlist.OPTION_EDGE]);
      
      opts = {};
      opts.ojContext = this;
      opts = $.extend(this.options, opts);
      this.navlist.init(opts);
    },

    getNodeBySubId: function (locator) {
      return this.navlist.getNodeBySubId(locator);
    },
    getSubIdByNode: function (node) {
      return this.navlist.getSubIdByNode(node);
    },
    /**
     * {@ojinclude "name":"nodeContextDoc"}
     * @param {!Element} node - {@ojinclude "name":"nodeContextParam"}
     * @returns {Object|null} {@ojinclude "name":"nodeContextReturn"}
     *
     * @example {@ojinclude "name":"nodeContextExample"}
     *
     * @expose
     * @instance
     * @memberof oj.ojNavigationList
     */
    getContextByNode: function (node) {
      return this.navlist.getContextByNode(node);
    },
    /**
     * Expand an item.<p>
     * Note when vetoable is set to false, beforeExpand event will still be fired but the event cannot be veto.<p>
     *
     * @ignore
     * @memberof oj.ojNavigationList
     * @instance
     * @param {Object|string} key the <a href="#key-section">Key</a> of the item to expand
     * @param {boolean} vetoable if event is vetoable
     * @param {boolean} animate true if animate the expand operation, false otherwise
     */
    expand: function (key, vetoable, animate) {
      this.navlist.expandKey(key, vetoable, true, true, animate);
    },
    /**
     * Collapse an item.<p>
     * Note when vetoable is set to false, beforeCollapse event will still be fired but the event cannot be veto.<p>
     *
     * @ignore
     * @memberof oj.ojNavigationList
     * @instance
     * @param {Object|string} key the <a href="#key-section">Key</a> of the item to collapse
     * @param {boolean} vetoable if event is vetoable
     * @param {boolean} animate true if animate the collapse operation, false otherwise
     */
    collapse: function (key, vetoable, animate) {
      this.navlist.collapseKey(key, vetoable, true, animate);
    },
    /**
     * Gets the key of currently expanded items.
     *
     * @ignore
     * @memberof oj.ojNavigationList
     * @instance
     * @return {Array} array of keys of currently expanded items
     */
    getExpanded: function () {
      return this.navlist.getExpanded();
    },
    _validateOptionsForIconsOnlyAndHorizontalList: function (drillMode, display, edge) {
      if (drillMode !== this.navlist.OPTION_DRILL_MODE_NONE) {
        if (display === this.navlist.OPTION_DISPLAY_ICONS) {
          throw "Icon only navigation list should have drillMode set to 'none'.";
        }
        if (edge === this.navlist.OPTION_EDGE_TOP) {
          throw "Horizontal navigation list should have drillMode set to 'none'.";
        }
      }
    },
    _validateOptionValues: function (key, value) {
      var valid = true;
      if (key === this.navlist.OPTION_DRILL_MODE) {
        valid = (value === this.navlist.OPTION_DRILL_MODE_NONE || value === this.navlist.OPTION_DRILL_MODE_COLLAPSIBLE || value === this.navlist.OPTION_DRILL_MODE_SLIDING);
      } else if (key === this.navlist.OPTION_DISPLAY) {
        valid = (value === this.navlist.OPTION_DISPLAY_ALL || value === this.navlist.OPTION_DISPLAY_ICONS);
      } else if (key === this.navlist.OPTION_EDGE) {
        if(this.element[0].tagName.toLowerCase() === this.navlist.TAG_NAME_TAB_BAR){
          valid = (value === this.navlist.OPTION_EDGE_TOP || value === this.navlist.OPTION_EDGE_START ||
                  value === this.navlist.OPTION_EDGE_END || value === this.navlist.OPTION_EDGE_BOTTOM);
        } else {
          valid = (value === this.navlist.OPTION_EDGE_TOP || value === this.navlist.OPTION_EDGE_START);
        }
      }
      if (!valid) {
        throw "Invalid value: " + value + " for key: " + key;
      }
    },
    /**
     * Set single option
     * @param {string} key the option key
     * @param {Object} value value for option
     * @override
     * @memberof oj.ojNavigationList
     * @instance
     * @private
     */
    _setOption: function (key, value) {
      var flags, extraData;
      this._validateOptionValues(key, value);
      switch (key) {
      case this.navlist.OPTION_DRILL_MODE:
        this._validateOptionsForIconsOnlyAndHorizontalList(value, this.options[this.navlist.OPTION_DISPLAY], this.options[this.navlist.OPTION_EDGE]);
        break;
      case this.navlist.OPTION_DISPLAY:
        this._validateOptionsForIconsOnlyAndHorizontalList(this.options[this.navlist.OPTION_DRILL_MODE], value, this.options[this.navlist.OPTION_EDGE]);
        break;
      case this.navlist.OPTION_EDGE:
        this._validateOptionsForIconsOnlyAndHorizontalList(this.options[this.navlist.OPTION_DRILL_MODE], this.options[this.navlist.OPTION_DISPLAY], value);
        break;
      case this.navlist.OPTION_SELECTION:
        extraData = this.navlist.getItems([value])[0];
        flags = {'_context': {extraData: {'item': this._IsCustomElement() ? extraData : $(extraData)}}};
        break;
      case this.navlist.OPTION_CURRENT_ITEM:
        extraData = this.navlist.getItems([value])[0];
        flags = {'_context': {extraData: {'item': this._IsCustomElement() ? extraData : $(extraData)}}};
        break;  
      }
      if (flags)
      {
        return this._super(key, value, flags);
      }
      return this._super(key, value);
    },
    /**
     * Sets multiple options
     * @param {Object} options the options object
     * @param {Object} flags additional flags for option
     * @override
     * @private
     */
    _setOptions: function (options, flags) {
      var key, result = this.navlist.setOptions(options, flags);

      var nonSkippedOptions = {};
      for (key in options) {
        if (result.skipOptions.indexOf(key) < 0) {
            nonSkippedOptions[key] = options[key];
        }
      }
      // Should call _super as that's where the old and new option value checking
      // logic lives. _setOption should not be called directly.
      this._super(nonSkippedOptions, flags);

      if (result.needRefresh) {
        this.navlist.refresh();
      }
      return this;
    },
    
    /**
    * Invoked when application calls oj.Components.subtreeAttached.
    * @override
    * @private
    */
    _NotifyAttached: function()
    {
        this.navlist.notifyAttached();
    },

    /**
     * In browsers [Chrome v35, Firefox v24.5, IE9, Safari v6.1.4], blur and mouseleave events are generated for hidden content but not detached content,
     * so for detached content only, we must use this hook to remove the focus and hover classes.
     * @override
     * @private
     */
    _NotifyDetached: function () {
      this.navlist.notifyDetached();
    },
    /**
     * Invoked when application calls oj.Components.subtreeShown.
     * @override
     * @private
     */
    _NotifyShown: function () {
      this.navlist.notifyShown();
    },
    /**
     * Refreshes the visual state of the Navigation List. JET components require a <code class="prettyprint">refresh()</code> after the DOM is
     * programmatically changed underneath the component.
     * <p>This method does not accept any arguments.
     *
     * @expose
     * @memberof oj.ojNavigationList
     * @instance
     *
     * @example <caption>Invoke the <code class="prettyprint">refresh</code> method:</caption>
     *  myNavList.refresh();
     */
    refresh: function () {
      this._super();
      this.navlist.refresh();

    },
    /**
     * Returns a Promise that resolves when the component is ready, i.e. after data fetching, rendering, and animations complete. 
     * Note that in the highwatermark scrolling case, component is ready after data fetching, rendering, and associated animations of items fetched so far are complete.
     *
     * <p>This method does not accept any arguments.
     * 
     * @expose
     * @ignore
     * @memberof oj.ojNavigationList
     * @instance
     * @return {Promise} A Promise that resolves when the component is ready.
     */
    whenReady: function () {
      return this.navlist.whenReady();
    },
     /**
     * Sets up resources needed by navlist
     * @memberof! oj.ojNavigationList
     * @instance
     * @override
     * @protected
     */
    _SetupResources: function()
    {
        this._super();
        this.navlist.setupResources();
    },
    /**
     * Release resources held by navlist
     * @memberof! oj.ojNavigationList
     * @instance
     * @override
     * @protected
     */
    _ReleaseResources: function()
    {
        this._super();
        this.navlist.releaseResources();
    },
    /**
     * Destroy the Navigation List
     * @memberof! oj.ojNavigationList
     * @private
     */
    _destroy: function () {
      this.navlist.destroy();
      this._super();
    },

    //** @inheritdoc */
    _CompareOptionValues: function(option, value1, value2)
    {
      switch(option)
      {
         case 'currentItem':
         case 'selection':
            return oj.Object.compareValues(value1, value2);
         default:
            return this._super(option, value1, value2);
      }
    }

    // Fragments:

    /**
     * <table class="keyboard-table">
     *   <thead>
     *     <tr>
     *       <th>Target</th>
     *       <th>Gesture</th>
     *       <th>Action</th>
     *     </tr>
     *   </thead>
     *   <tbody>
     *     <tr>
     *       <td rowspan="2">List Item</td>
     *       <td><kbd>Tap</kbd></td>
     *       <td>Selects the item.</td>
     *     </tr>
     *     <tr>
     *       <td><kbd>Press & Hold</kbd></td>
     *       <td>Display context menu</td>
     *     </tr>
     *     <tr>
     *       <td rowspan="2">Group Item</td>
     *       <td><kbd>Tap</kbd></td>
     *       <td>Expand or collapse the group item if <code class="prettyprint">drillMode</code> is set to collapsible.
     *       When <code class="prettyprint">drillMode</code> is set to sliding, sublist will silde in.
     *       When <code class="prettyprint">drillMode</code> is set to none, group item will be selecetd.</td>
     *     </tr>
     *     <tr>
     *       <td><kbd>Press & Hold</kbd></td>
     *       <td>Display context menu</td>
     *     </tr>
     *     <tr>
     *       <td>Hierarchical Menu button</td>
     *       <td><kbd>Tap</kbd></td>
     *       <td>Open menu. Refer <a href="oj.ojButton.html#touch-section">menu button</a> touch documentation. Note: This is applicable only for Sliding Navigation List. </td>
     *     </tr>
     *     <tr>
     *       <td>Overflow Menu button</td>
     *       <td><kbd>Tap</kbd></td>
     *       <td>Open menu. Refer <a href="oj.ojButton.html#touch-section">menu button</a> touch documentation. Note: This is applicable only for Horizontal Navigation List when <code class="prettyprint">overflow</code> is set to <code class="prettyprint">popup</code>. </td>
     *     </tr>
     *     <tr>
     *       <td>Previous Icon or List Header</td>
     *       <td><kbd>Tap</kbd></td>
     *       <td>Collapses the sublist and slides to parent list. Note: This is applicable only for Sliding Navigation List. </td>
     *     </tr>
     *   </tbody>
     * </table>
     *
     * @ojfragment touchDoc - Used in touch gesture section of classdesc, and standalone gesture doc
     * @memberof oj.ojNavigationList
     */

    /**
     * <table class="keyboard-table">
     *   <thead>
     *     <tr>
     *       <th>Target</th>
     *       <th>Key</th>
     *       <th>Action</th>
     *     </tr>
     *   </thead>
     *   <tbody>
     *     <tr>
     *       <td rowspan="10">List Item</td>
     *       <td><kbd>Enter</kbd> or <kbd>Space</kbd></td>
     *       <td>Selects list item.</td>
     *     </tr>
     *     <tr>
     *       <td><kbd>UpArrow</kbd></td>
     *       <td>Moves focus to the previous visible list item.</td>
     *     </tr>
     *     <tr>
     *       <td><kbd>DownArrow</kbd></td>
     *       <td>Moves focus to the next  visible list item</td>
     *     </tr>
     *     <tr>
     *       <td><kbd>RightArrow</kbd> (<kbd>LeftArrow</kbd> in RTL)</td>
     *       <td>For horizontal navigation list,focus will be moved to next visible item.
     *       </td>
     *     </tr>
     *     <tr>
     *       <td><kbd>LeftArrow</kbd> (<kbd>RightArrow</kbd> in RTL)</td>
     *       <td>For horizontal navigation list,focus will be moved to previous visible item.</td>
     *     </tr>
     *     <tr>
     *       <td><kbd>Home</kbd></td>
     *       <td>Moves focus to the first visible list item.</td>
     *     </tr>
     *     <tr>
     *       <td><kbd>End</kbd></td>
     *       <td>Moves focus to the last visible list item.</td>
     *     </tr>
     *     <tr>
     *       <td><kbd>F2</kbd></td>
     *       <td>If focus is on a list item, pressing F2 will make its contents accessible using TAB.</td>
     *     </tr>
     *     <tr>
     *       <td><kbd>Esc</kbd></td>
     *       <td>When F2 mode is enabled, press Esc to exit F2 mode.</td>
     *     </tr>
     *     <tr>
     *       <td><kbd>Shift+Tab</kbd></td>
     *       <td>Move fous to hierarchical menu button.Only applicable for sliding navigation list and when hierarchial menu button is enabled.</td>
     *     </tr>
     *     <tr>
     *       <td rowspan="2">Group Item</td>
     *       <td><kbd>RightArrow</kbd> (<kbd>LeftArrow</kbd> in RTL)</td>
     *       <td>If focus is on collapsed node, expands the sub list.</td>
     *     </tr>
     *     <tr>
     *       <td><kbd>LeftArrow</kbd> (<kbd>RightArrow</kbd> in RTL)</td>
     *       <td>If focus is on expanded node, collapses the sub list.</td>
     *     </tr>
     *     <tr>
     *       <td>List Item in sublist</td>
     *       <td><kbd>Esc</kbd></td>
     *       <td>Applicable only for sliding navigation list. If focus is in a sub list, closes the sublist and moves focus to the parent list item.</td>
     *     </tr>
     *     <tr>
     *       <td rowspan="3">Hierarchical Menu button</td>
     *       <td><kbd>Enter</kbd></td>
     *       <td>Open menu. Refer <a href="oj.ojButton.html#keyboard-section">menu button</a> keyboard documentation. Note: This target is visible only for Sliding Navigation List.</td>
     *     </tr>
     *     <tr>
     *       <td><kbd>Tab</kbd></td>
     *       <td>Moves focus to current list item. Note: This target is visible only for Sliding Navigation List. </td>
     *     </tr>
     *     <tr>
     *       <td><kbd>Shift + Tab</kbd></td>
     *       <td>Moves focus to Previous Icon. Note: This target is visible only for Sliding Navigation List.</td>
     *     </tr>
     *     <tr>
     *       <td>Overflow Menu button</td>
     *       <td><kbd>Enter or Space</kbd></td>
     *       <td>Open menu. Refer <a href="oj.ojButton.html#touch-section">menu button</a> touch documentation. Note: This is applicable only for Horizontal Navigation List when <code class="prettyprint">overflow</code> is set to <code class="prettyprint">popup</code>. </td>
     *     </tr>     
     *     <tr>
     *       <td rowspan="2">Previous Icon or List Header</td>
     *       <td><kbd>Enter</kbd></td>
     *       <td>Collapses the sublist and slides to parent list.Note: This target is visible only for Sliding Navigation List. </td>
     *     </tr>
     *     <tr>
     *       <td><kbd>Tab</kbd></td>
     *       <td>Moves focus to Hierarchical Menu button. Note: This target is visible only for Sliding Navigation List. </td>
     *     </tr>
     *
     *   </tbody>
     * </table>
     *
     *
     * @ojfragment keyboardDoc - Used in keyboard section of classdesc, and standalone gesture doc
     * @memberof oj.ojNavigationList
     */

    /**
     * {@ojinclude "name":"ojStylingDocIntro"}
     * <table class="generic-table styling-table">
     *   <thead>
     *     <tr>
     *       <th>{@ojinclude "name":"ojStylingDocClassHeader"}</th>
     *       <th>{@ojinclude "name":"ojStylingDocDescriptionHeader"}</th>
     *       <th>{@ojinclude "name":"ojStylingDocExampleHeader"}</th>
     *     </tr>
     *   </thead>
     *   <tbody>
     *     <tr>
     *       <td>oj-navigationlist-stack-icon-label</td>
     *       <td>Displays horizontal Navigation List with icon and label stacked. Applicable only when <code class="prettyprint">edge</code> is <code class="prettyprint">top</code>.</td>
     *       <td>
     *          <pre class="prettyprint">
     *<code>&lt;oj-navigation-list class="oj-navigationlist-stack-icon-label" >
     *  &lt;ul>    
     *    &lt;li id="foo">
     *      &lt;a href="#">
     *        &lt;span class="oj-navigationlist-item-icon demo-icon-font-24 demo-palette-icon-24">
     *        &lt;/span>
     *        Foo
     *      &lt;/a>
     *    &lt;/li>
     *  &lt;/ul>
     *&lt;/oj-navigation-list>
     *</code></pre>
     *       </td>
     *     </tr>
     *     <tr>
     *       <td>oj-navigationlist-category-divider</td>
     *       <td>Use this class to add horizontal divider line between two categories of items.</td>
     *       <td>
     *          <pre class="prettyprint">
     *<code>&lt;oj-navigation-list>
     *  &lt;ul>
     *    &lt;li ...> &lt;/li>
     *    &lt;li class="oj-navigationlist-category-divider"> &lt;/li>    
     *    &lt;li id="foo">
     *      &lt;a href="#">
     *        &lt;span class="oj-navigationlist-item-icon demo-icon-font-24 demo-palette-icon-24">
     *        &lt;/span>
     *        Foo
     *      &lt;/a>
     *    &lt;/li>
     *    &lt;li ...> &lt;/li>
     *  &lt;/ul>
     *&lt;/oj-navigation-list>
     *</code></pre>
     *       </td>     
     *     </tr>
     *     <tr>
     *       <td>oj-navigationlist-item-icon</td>
     *       <td>Use this class to add icon to list item.</td>
     *       <td>
     *          <pre class="prettyprint">
     *<code>&lt;oj-navigation-list>
     *  &lt;ul>    
     *    &lt;li id="foo">
     *      &lt;a href="#">
     *        &lt;span class="oj-navigationlist-item-icon demo-icon-font-24 demo-palette-icon-24">
     *        &lt;/span>
     *        Foo
     *      &lt;/a>
     *    &lt;/li>
     *  &lt;/ul>
     *&lt;/oj-navigation-list></code></pre>
     *       </td>
     *     </tr>
     *     <tr>
     *       <td>oj-navigationlist-item-title</td>
     *       <td>When arbitrary content is placed inside item's content area, it's title text can be marked using this style class. This helps component in identifying the Item's label.
     *       </td>
     *       <td>
     * <pre class="prettyprint">
     * <code>&lt;li>
     *   &lt;div>
     *     &lt;span class="oj-navigationlist-item-title">Play&lt;/span>
     *     &lt;button>Button&lt;/button>
     *   &lt;/div>
     * &lt;/li>
     * </code></pre>
     *       </td>
     *     </tr>
     *     <tr>
     *       <td>oj-navigationlist-item-text-wrap</td>
     *       <td>Use this class to wrap item label text. Note: On IE11, this is not supported when <code class="prettyprint">overflow</code> attribute is set to <code class="prettyprint">popup</code>.</td>
     *       <td>
     *          <pre class="prettyprint">
     *<code>&lt;oj-navigation-list class="oj-navigationlist-item-text-wrap" >
     *  &lt;ul>    
     *    &lt;li id="foo">
     *      &lt;a href="#">
     *        &lt;span class="oj-navigationlist-item-icon demo-icon-font-24 demo-palette-icon-24">
     *        &lt;/span>
     *        Foo
     *      &lt;/a>
     *    &lt;/li>
     *  &lt;/ul>
     *&lt;/oj-navigation-list>
     *</code></pre>
     *       </td>     
     *     </tr>
     *     <tr>
     *       <td>oj-navigationlist-item-dividers</td>
     *       <td>Use this class to show dividers between horizontal navigation list items.</td>
     *       <td>
     *          <pre class="prettyprint">
     *<code>&lt;oj-navigation-list class="oj-navigationlist-item-dividers" >
     *  &lt;ul>    
     *    &lt;li id="foo">
     *       &lt;a href="#">
     *         &lt;span class="oj-navigationlist-item-icon demo-icon-font-24 demo-palette-icon-24">&lt;/span>
     *         Foo
     *       &lt;/a>
     *    &lt;/li>
     *  &lt;/ul>
     *&lt;/oj-navigation-list>
     *</code></pre>
     *       </td>     
     *     </tr>     
     *     </tr>
     *     <tr>
     *       <td>oj-sm-condense</td>
     *       <td>Use this class to condense horizontal navigation list items on small screens and larger.
     *       </td>
     *       <td rowspan="4">
     *          <pre class="prettyprint">
     *<code>&lt;oj-navigation-list class="oj-sm-condense" >
     *  &lt;ul>    
     *    &lt;li id="foo">
     *      &lt;a href="#">
     *        &lt;span class="oj-navigationlist-item-icon demo-icon-font-24 demo-palette-icon-24">&lt;/span>
     *        Foo
     *      &lt;/a>
     *    &lt;/li>
     *  &lt;/ul>
     *&lt;/oj-navigation-list>
     *</code></pre>
     *       </td>      
     *     </tr>
     *     <tr>
     *       <td>oj-md-condense</td>
     *       <td>Use this class to condense horizontal navigation list items on medium screens and larger.
     *       </td>
     *     </tr>
     *     <tr>
     *       <td>oj-lg-condense</td>
     *       <td>Use this class to condense horizontal navigation list items on large screens and larger.
     *       </td>
     *     </tr>
     *     <tr>
     *       <td>oj-xl-condense</td>
     *       <td>Use this class to condense horizontal navigation list items on extra large screens and larger.
     *       </td>
     *     </tr>
     *     <tr>
     *       <td>oj-navigationlist-nofollow-link</td>
     *       <td> Use this class to prevent automatic navigation to the url specified on <code class="prettyprint">&lt;a></code> tag's <code class="prettyprint">href</code> attribute. In this case, navigation can be handled programmatically by using <code class="prettyprint">selectionChanged</code> event. This is useful to execute some custom logic before browser triggers navigation.
     *       </td>
     *       <td>
     *          <pre class="prettyprint">
     *<code>&lt;oj-navigation-list class="oj-navigationlist-nofollow-link" >
     *  &lt;ul>    
     *    &lt;li id="foo">&lt;a href="folder/foo.html">
     *      &lt;span 
     *        class="oj-navigationlist-item-icon demo-icon-font-24 demo-palette-icon-24">&lt;/span>
     *      Foo&lt;/a>
     *    &lt;/li>
     *  &lt;/ul>
     *&lt;/oj-navigation-list>
     *</code></pre>
     *       </td>     
     *     </tr>
     *     <tr>
     *       <td>oj-focus-highlight</td>
     *       <td>{@ojinclude "name":"ojFocusHighlightDoc"}</td>
     *       <td></td>
     *     </tr>
     *   </tbody>
     * </table>
     *
     * @ojfragment stylingDoc - Used in Styling section of classdesc, and standalone Styling doc
     * @memberof oj.ojNavigationList
     */

    // SubId Locators *****************************************************

    /**
     * <p>Sub-ID for the oj-navigtion-list component's list item element.</p>
     *
     * <p>
     * To lookup the list items the locator object should have the following:
     * <ul>
     * <li><b>subId</b>: 'oj-navigationlist-item'</li>
     * <li><b>key</b>: the <a href="#key-section">Key</a> of the item</li>
     * </ul>
     *
     * @ojsubid oj-navigationlist-item
     * @memberof oj.ojNavigationList
     *
     * @example <caption>Get the list item element with key 'foo':</caption>
     * var node = myNavList.getNodeBySubId({'subId': 'oj-navigationlist-item', 'key': 'foo'} );
     */
    /**
     * <p>Sub-ID for the oj-navigtion-list component's previous link element.</p>
     *
     * To lookup the previous link the locator object should have the following:
     * <ul>
     * <li><b>subId</b>: 'oj-navigationlist-previous-link'</li>
     * </ul>
     * @ojsubid oj-navigationlist-previous-link
     * @memberof oj.ojNavigationList
     *
     * @example <caption>Get the previous link element:</caption>
     * var node = myNavList.getNodeBySubId({'subId': 'oj-navigationlist-previous-link'} );
     */
    /**
     * <p>Sub-ID for the oj-navigtion-list component's hierarchical menu button element.
     * See the <a href="#getNodeBySubId">getNodeBySubId</a> method for details.</p>
     *
     * To lookup the hierarchical menu button the locator object should have the following:
     * <ul>
     * <li><b>subId</b>: 'oj-navigationlist-hierarchical-button'</li>
     * </ul>
     * @ojsubid
     * @name oj-navigationlist-hierarchical-button
     * @memberof oj.ojNavigationList
     *
     * @example <caption>Get the hierarchical menu button element:</caption>
     * var node = myNavList.getNodeBySubId({'subId': 'oj-navigationlist-hierarchical-button'} );
     */
    /**
     * <p>Sub-ID for the oj-navigation-list component's hierarchical menu element.</p>
     *
     * To lookup the hierarchical menu the locator object should have the following:
     * <ul>
     * <li><b>subId</b>: 'oj-navigationlist-hierarchical-menu'</li>
     * </ul>
     * @ojsubid
     * @name oj-navigationlist-hierarchical-menu
     * @memberof oj.ojNavigationList
     *
     * @example <caption>Get the hierarchical menu element:</caption>
     * var node = myNavList.getNodeBySubId({'subId': 'oj-navigationlist-hierarchical-menu'} );
     */

    // Node Context Objects *********************************************
    /**
     * <p>Context for the oj-navigation-list component's items.</p>
     *
     * @property {number} index the zero based item index relative to its parent
     * @property {Object|string} key the <a href="#key-section">Key</a> of the item
     * @property {Element} parent the parent group item.  Only available if item has a parent.
     * @property {boolean} group whether the item is a group.
     *
     * @ojnodecontext oj-navigationlist-item
     * @memberof oj.ojNavigationList
     */
  });

  // Add custom getters for properties from theming file
  oj.Components.setDefaultOptions({
    'ojNavigationList': {
      'hierarchyMenuDisplayThresholdLevel': oj.Components.createDynamicPropertyGetter(
        function () {
          return (oj.ThemeUtils.parseJSONFromFontFamily('oj-navigationlist-option-defaults') || {})["hierarchyMenuDisplayThresholdLevel"];
        }
      )
    }
  });
}());

// DOCLETS
/**
   * @ojcomponent oj.ojTabBar
   * @augments oj.baseComponent
   * @ojstatus preview
   * @since 4.0.0
   *
   * @classdesc
   * <h3 id="navlistOverview-section">
   *   JET Tab Bar
   *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#navlistOverview-section"></a>
   * </h3>
   *
   * <p>Description: JET Tab Bar enhances a HTML list element into a themable, WAI-ARIA compliant, mobile friendly component with advance interactive features.
   *
   * <p>The JET Tab Bar gets its data in following ways. </p>
   * <ul>
   * <li><b>Using table datasource</b>. There are several types of TableDataSource that
   * are available out of the box like  <a href="oj.ArrayTableDataSource.html">oj.ArrayTableDataSource</a>,<a href="oj.CollectionTableDataSource.html">oj.CollectionTableDataSource</a>. <p> NOTE: oj.PagingTableDataSource is not supported by tab bar.</li>
   * <li><b>Using static content </b>.  The structure of the content should be flat as shown below. </li>
   * </ul>
   * <p>Example of flat static content</p>
   * <pre class="prettyprint">
   * <code>
   * &lt;oj-tab-bar>
   *  &lt;ul>
   *   &lt;li>&lt;a href="#">Item 1&lt;/a>&lt;/li>
   *   &lt;li>&lt;a href="#">Item 2&lt;/a>&lt;/li>
   *   &lt;li>&lt;a href="#">Item 3&lt;/a>&lt;/li>
   *  &lt;/ul>
   * &lt;/oj-tab-bar>
   * </code></pre>
   * <p>Any list item can be disabled by adding the <code class="prettyprint">oj-disabled</code> class to that element.  As with any DOM change, doing so post-init
   * requires a <code class="prettyprint">refresh()</code> of the element.
   *
   * <h3 id="key-section">
   *   Key
   *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#key-section"></a>
   * </h3>
   * <p>Key is an identifier which uniquely identifies an item in tabbar. 
   *  <ul>
   *  <li>When static html is used, it will be the <code class="prettyprint">id</code> attribute of <code class="prettyprint">&lt;li></code>. If no <code class="prettyprint">id</code> is specified then component will generate an id and will use it as key.</li>
   *  <li>When data source is used, it will be the <code class="prettyprint">id</code> attribute of item's data object.
   *  </ul>
   * <h3 id="icons-section">
   *   Icons
   *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#icons-section"></a>
   * </h3>
   *
   * <p>Sublist icons are inserted automatically.  To add other icons to list items, include them in the markup and include the <code class="prettyprint">oj-tabbar-item-icon</code> class, as follows:
   *
   * <pre class="prettyprint">
   * <code>&lt;oj-tab-bar>
   *   &lt;ul>    
   *     &lt;li id="foo">&lt;a href="#">&lt;span class="oj-tabbar-item-icon demo-icon-font-24 demo-palette-icon-24">&lt;/span>Foo&lt;/a>&lt;/li>
   *   &lt;/ul>
   *  &lt;/oj-tab-bar>
   * </code></pre>
   *
   * <h3 id="styling-section">
   *   Styling
   *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#styling-section"></a>
   * </h3>
   *
   * {@ojinclude "name":"stylingDoc"}
   * <h3 id="touch-section">
   *   Touch End User Information
   *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#touch-section"></a>
   * </h3>
   *
   * {@ojinclude "name":"touchDoc"}
   *
   * <h3 id="keyboard-section">
   *   Keyboard End User Information
   *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#keyboard-section"></a>
   * </h3>
   * {@ojinclude "name":"keyboardDoc"}
   *
   * <p>Disabled items will not receive keyboard focus and do not allow any interaction.
   *
   *<h3 id="context-section">
   *   Item Context
   *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#context-section"></a>
   * </h3>
   *
   * <p>For all item options, developers can specify a function as the return value.  The function takes a single argument, which is an object that contains contextual information about the particular item.  This gives developers the flexibility to return different value depending on the context.</p>
   *
   * <p>The context paramter contains the following keys:</p>
   * <table class="keyboard-table">
   *   <thead>
   *     <tr>
   *       <th>Key</th>
   *       <th>Description</th>
   *     </tr>
   *   </thead>
   *   <tbody>
   *     <tr>
   *       <td><kbd>componentElement</kbd></td>
   *       <td>oj-tab-bar element.</td>
   *     </tr>
   *     <tr>
   *       <td><kbd>datasource</kbd></td>
   *       <td>A reference to the data source object. (Not available for static content)</td>
   *     </tr>
   *     <tr>
   *       <td><kbd>index</kbd></td>
   *       <td>The index of the item, where 0 is the index of the first item.</td>
   *     </tr>
   *     <tr>
   *       <td><kbd>key</kbd></td>
   *       <td>The <a href="#key-section">Key</a> of the item.</td>
   *     </tr>
   *     <tr>
   *       <td><kbd>data</kbd></td>
   *       <td>The data object for the item.</td>
   *     </tr>
   *     <tr>
   *       <td><kbd>parentElement</kbd></td>
   *       <td>The list item element.  The renderer can use this to directly append content.</td>
   *     </tr>
   *   </tbody>
   * </table>
   *
   * <p></p>
   * <h3 id="perf-section">
   *   Performance
   *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#perf-section"></a>
   * </h3>
   *
   * <h4>Data Set Size</h4>
   * <p>As a rule of thumb, it's recommended that applications limit the amount of data to display.  Displaying large
   * number of items in Tab Bar makes it hard for user to find what they are looking for, but affects the load time.
   *
   * <h4>Item Content</h4>
   * <p>Tab Bar allows developers to specify arbitrary content inside its item. In order to minimize any negative effect on
   * performance, you should avoid putting a large number of heavy-weight components inside because as you add more complexity
   * to the structure, the effect will be multiplied because there can be many items in the Tab Bar.</p>
   *
   * <h3 id="a11y-section">
   *   Accessibility
   *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#a11y-section"></a>
   * </h3>
   * <p>See also the <a href="#styling-section">oj-focus-highlight</a> discussion.
   * <p>Disabled content: JET supports an accessible luminosity contrast ratio,
   * as specified in <a href="http://www.w3.org/TR/WCAG20/#visual-audio-contrast-contrast">WCAG 2.0 - Section 1.4.3 "Contrast"</a>,
   * in the themes that are accessible.  (See the "Theming" chapter of the JET Developer Guide for more information on which
   * themes are accessible.)  Note that Section 1.4.3 says that text or images of text that are part of an inactive user
   * interface component have no contrast requirement.  Because disabled content may not meet the minimum contrast ratio
   * required of enabled content, it cannot be used to convey meaningful information.<p>
   *
   *
   * <h3 id="rtl-section">
   *   Reading direction
   *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#rtl-section"></a>
   * </h3>
   *
   * <p>The only supported way to set the reading direction (LTR or RTL) is to set the <code class="prettyprint">"dir"</code> attribute on the
   * <code class="prettyprint">&lt;html></code> element of the page.  As with any JET custom element, in the unusual case that the reading direction
   * is changed post-init, the tab bar must be <code class="prettyprint">refresh()</code>ed, or the page must be reloaded.
   *
   *
   * <h3 id="animation-section">
   *   Animation
   *   <a class="bookmarkable-link" title="Bookmarkable Link" href="#animation-section"></a>
   * </h3>
   *
   * <p>Applications can customize animations triggered by actions in Tab Bar by either listening for <code class="prettyprint">animateStart/animateEnd</code>
   *    events or overriding action specific style classes on the animated item.  See the documentation of <a href="oj.AnimationUtils.html">oj.AnimationUtils</a> 
   *    class for details.</p>
   *
   * <p>The following are actions and their corresponding sass variables in which applications can use to customize animation effects.  
   * <table class="keyboard-table">
   *   <thead>
   *     <tr>
   *       <th>Action</th>
   *       <th>Sass Variable</th>
   *       <th>Description</th>
   *     </tr>
   *   </thead>
   *   <tbody>
   *     <tr>
   *       <td rowspan="2"><kbd>add</kbd></td>
   *       <td>$tabBarHorizontalAddAnimation</td>
   *       <td>When a new item is added to the oj.TableDataSource associated with Horizontal Tab Bar.</td>
   *     </tr>
   *     <tr>
   *       <td>$tabBarAddAnimation</td>
   *       <td>When a new item is added to the oj.TableDataSource associated with Vertical Tab Bar.</td>
   *     </tr>
   *     <tr>
   *       <td rowspan="2"><kbd>remove</kbd></td>
   *       <td>$tabBarHorizontalRemoveAnimation</td>
   *       <td>When an existing item is removed from the oj.TableDataSource associated with Horizontal Tab Bar.</td>
   *     </tr>
   *     <tr>
   *       <td>$tabBarRemoveAnimation</td>
   *       <td>When an existing item is removed from the oj.TableDataSource associated with Vertical Tab Bar.</td>
   *     </tr>   
   *     <tr>
   *       <td><kbd>update</kbd></td>
   *       <td>$tabBarUpdateAnimation</td>
   *       <td>When an existing item is updated in the oj.TableDataSource associated with TabBar.</td>
   *     </tr>
   *     <tr>
   *       <td><kbd>pointerUp</kbd></td>
   *       <td>$tabBarPointerUpAnimation</td>
   *       <td>When user finish pressing an item (on touch).</td>
   *     </tr>
   *   </tbody>
   * </table>
   *
   */
   /**
       * <a href="#key-section">Key</a> of the current item.  Current item is the list item which is having active focus.  Note that if currentItem
       * is set to an item that is currently not available (not fetched or
       * inside a collapsed parent node), then the value is ignored.
       *
       * @expose
       * @public
       * @instance
       * @name currentItem
       * @memberof! oj.ojTabBar
       * @type {string|Object}
       * @default <code class="prettyprint">null</code>
       * @ojwriteback
       *
       * @example <caption>Initialize the Tab Bar with the <code class="prettyprint">current-item</code> attribute specified:</caption>
       *  &lt;oj-tab-bar current-item='settings'> ... &lt;/oj-tab-bar>
       * @example <caption>Get the current item:</caption>
       * var currentItem = myTabBar.currentItem;
       *
       * @example <caption>Set the current item on the tabbar:</caption>
       * myTabBar.currentItem = "newItem";
       */
      
      /**
       * The position of the Tab Bar. Valid Values: top, bottom, start and end.
       * @expose
       * @name edge
       * @memberof oj.ojTabBar
       * @instance
       * @type {string|null}
       * @ojvalue {string} "top" This renders list items horizontally. Generally used when tab bar placed on top of content section.
       * @ojvalue {string} "bottom" This renders list items horizontally. Generally used when tab bar placed on bottom of content section.
       * @ojvalue {string} "start" This renders list items vertically. Generally used when tab bar placed on left/start of content section.
       * @ojvalue {string} "end" This renders list items vertically. Generally used when tab bar placed on right/end of content section.
       * @default <code class="prettyprint">"start"</code>
       * @example <caption>Initialize the Tab Bar with the <code class="prettyprint">edge</code> attribute specified:</caption>
       *  &lt;oj-tab-bar edge='top'> ... &lt;/oj-tab-bar>
       * @example <caption>Get the edge:</caption>
       * var edge = myTabBar.edge;
       *
       * @example <caption>Set the edge on the tabbar:</caption>
       * myTabBar.edge = "top";
       */

      
      /**
       * Item <a href="#key-section">Key</a> of currently selected list item. If the value is modified
       * by an application, tab bar UI is modified to match the new value.
       * @type {Object|string}
       * @name selection
       * @default <code class="prettyprint">null</code>
       * @ojwriteback
       * @expose
       * @instance
       * @memberof oj.ojTabBar
       * @example <caption>Initialize the Tab Bar with the <code class="prettyprint">selection</code> attribute specified:</caption>
       *  &lt;oj-tab-bar selection='settings'> ... &lt;/oj-tab-bar>
       *  
       * @example <caption>Get the selection:</caption>
       * var selection = myTabBar.selection;
       *
       * @example <caption>Set the selection on the tabbar:</caption>
       * myTabBar.selection = "settings";
       */
      
      /**
       * The data source for the Tab Bar accepts either a oj.TableDataSource.
       * See the data source section in the introduction for out of the box data source types.
       * If the data attribute is not specified, the child elements are used as content.  If there's no
       * content specified, then an empty list is rendered.
       *
       * @expose
       * @name data
       * @memberof! oj.ojTabBar
       * @instance
       * @type {oj.TableDataSource}
       * @default <code class="prettyprint">null</code>
       * @example <caption>Initialize the Tab Bar with the <code class="prettyprint">data</code> attribute specified:</caption>
       *  &lt;oj-tab-bar data='[[tableDataSource]]'> ... &lt;/oj-tab-bar>
       * @example <caption>Get the data:</caption>
       * var dataSource = myTabBar.data;
       *
       * @example <caption>Set the data attribute using one-dimensional array:</caption>
       * myTabBar.data = new oj.ArrayTableDataSource([1,2,3]);
       * 
       * @example <caption>Set the data attribute using oj.Collection:</caption>
       * myTabBar.data = new oj.CollectionTableDataSource(collection);
       */

      /**
       * Whether to display both the label and icons (<code class="prettyprint">"all"</code>) or just the icons (<code class="prettyprint">"icons"</code>).
       * In the latter case, the label is displayed in a tooltip instead, unless a tooltip was already supplied at create time.
       * Note: <code class="prettyprint">display="icons"</code> is valid only when <code class="prettyprint">drillMode=none</code> and tab bar is a flat list.
       * It is also mandatory to provide icons for each item as stated in <a href="#icons-section">icons section</a>.
       *
       * @expose
       * @memberof oj.ojTabBar
       * @instance
       * @name display
       * @type {string}
       * @ojvalue {string} "all" Display both the label and icons.
       * @ojvalue {string} "icons" Display only the icons.
       * @default <code class="prettyprint">"all"</code>
       * @example <caption>Initialize the Tab Bar with the <code class="prettyprint">display</code> attribute specified:</caption>
       *  &lt;oj-tab-bar display='icons'> ... &lt;/oj-tab-bar>
       *  
       * @example <caption>Get or set the <code class="prettyprint">display</code> property:</caption>
       * // getter
       * var display = myTabBar.display;
       *
       * // setter
       * myTabBar.display = "icons";
       */

       /**
       * Specifies the overflow behaviour. 
       * NOTE: This is only applicable when <code class="prettyprint">edge</code> attribute set to <code class="prettyprint">top</code>
       * @expose
       * @memberof oj.ojTabBar
       * @name overflow
       * @instance
       * @type {string}
       * @ojvalue {string} "popup" popup menu will be shown with overflowed items.
       * @ojvalue {string} "hidden" overflow is clipped, and the rest of the content will be invisible.
       * @default <code class="prettyprint">"hidden"</code>
       * @example <caption>Initialize the Tab Bar with the <code class="prettyprint">overflow</code> attribute specified:</caption>
       *  &lt;oj-tab-bar overflow='popup'> ... &lt;/oj-tab-bar>
       * @example <caption>Get or set the <code class="prettyprint">overflow</code> property:</caption>
       * // getter
       * var overflow = myTabBar.overflow;
       *
       * // setter
       * myTabBar.overflow = "popup";
       */

      /**
       * The item property contains a subset of properties for items.
       *
       * @expose
       * @memberof! oj.ojTabBar
       * @instance
       * @name item
       */
        /**
         * The renderer function that renders the content of the item. See <a href="#context-section">itemContext</a>
         * in the introduction to see the object passed into the renderer function.
         * The function should return one of the following: 
         * <ul>
         *   <li>An Object with the following property:
         *     <ul><li>insert: HTMLElement | string - A string or a DOM element of the content inside the item.</li></ul>
         *   </li>
         *   <li>undefined: If the developer chooses to manipulate the item element directly, the function should return undefined.</li>
         * </ul>
         * If no renderer is specified, Tab Bar will treat the data as a String.
         *
         * @expose
         * @name item.renderer
         * @memberof! oj.ojTabBar
         * @instance
         * @type {function(Object)|null}
         * @default <code class="prettyprint">null</code>
         * @example <caption>Initialize the Tab Bar with the <code class="prettyprint">item.renderer</code> attribute specified:</caption>
         *  &lt;oj-tab-bar item.renderer="{{oj.KnockoutTemplateUtils.getRenderer('template', true)}}"> ... &lt;/oj-tab-bar>
         *  
         * @example <caption>Get or set the <code class="prettyprint">renderer</code> property:</caption>
         * // set the renderer function
         * myTabBar.item.renderer = rendererFn;
         * 
         * // get the renderer function
         * var rendererFn = myTabBar.item.renderer;
         */
        /**
         * Whether the item is selectable.
         * See <a href="#context-section">itemContext</a> in the introduction to see the object passed into the selectable function.
         *
         * @expose
         * @name item.selectable
         * @memberof! oj.ojTabBar
         * @instance
         * @type {function(Object)|boolean}
         * @default <code class="prettyprint">true</code>
         *
         * @example <caption>Initialize the Tab bar such that the first 3 items are not selectable:</caption>
         *  &lt;oj-tab-bar item.selectable="[[skipFirstThreeElementsFn]]">&lt;/oj-tab-bar>
         *  
         *  var skipFirstThreeElementsFn = function(itemContext) {
         *                                      return itemContext['index'] > 3; 
         *                                 }
         */
      //Events
      /**
       * Triggered when the default animation of a particular action is about to start.  The default animation can be cancelled by calling event.preventDefault.
       *
       * @expose
       * @event
       * @name animateStart
       * @memberof oj.ojTabBar
       * @instance
       * @property {Object} action the action that starts the animation.  See <a href="#animation-section">animation</a> section for a list of actions.
       * @property {Object} element the target of animation.  
       * @property {function} endCallback if the event listener calls event.preventDefault to cancel the default animation, it must call the endCallback function when it finishes its own animation handling and when any custom animation ends.
       */
      /**
       * Triggered when the default animation of a particular action has ended.  Note this event will not be triggered if application cancelled the default animation on animateStart.
       *
       * @expose
       * @event
       * @name animateEnd
       * @memberof oj.ojTabBar
       * @instance
       * @property {Object} action the action that started the animation.  See <a href="#animation-section">animation</a> section for a list of actions.
       * @property {Object} element the target of animation.  
       */

      /**
       * <p>Triggered before this list item is selected.
       * To prevent the item selection, return <code class="prettyprint">false</code> from event handler or invoke <code class="prettyprint">event.preventDefault()</code>.
       * <p>The <code class="prettyprint">ui.key</code> contains item key which uniquely identifies the item.
       * <code class="prettyprint">ui.item</code> payload field contains item element being selected.
       *
       * @expose
       * @event
       * @name beforeSelect
       * @memberof oj.ojTabBar
       * @instance
       * @property {Object|string} key Selected list item <a href="#key-section">Key</a>.
       * @property {Element} item Selected list item.
       */

 
      /**
       * Triggered before the current item is changed via the <code class="prettyprint">currentItem</code> property or via the UI.
       * To prevent the item being focused, return <code class="prettyprint">false</code> from event handler or invoke <code class="prettyprint">event.preventDefault()</code>.
       * @expose
       * @event
       * @memberof oj.ojTabBar
       * @name beforeCurrentItem
       * @instance
       * @property {Object|string} previousKey the <a href="#key-section">Key</a> of the previous item
       * @property {Element} previousItem the previous item
       * @property {Object|string} key the <a href="#key-section">Key</a> of the new current item
       * @property {Element} item the new current item
       */

    /**
     * {@ojinclude "name":"nodeContextDoc"}
     * @param {!Element} node - {@ojinclude "name":"nodeContextParam"}
     * @returns {Object|null} {@ojinclude "name":"nodeContextReturn"}
     *
     * @example {@ojinclude "name":"nodeContextExample"}
     * @method
     * @expose
     * @name getContextByNode
     * @instance
     * @memberof oj.ojTabBar
     */

    /**
     * Refreshes the visual state of the Tab Bar. JET components require a <code class="prettyprint">refresh()</code> after the DOM is
     * programmatically changed underneath the component.
     * <p>This method does not accept any arguments.
     *
     * @expose
     * @memberof oj.ojTabBar
     * @instance
     * @name refresh
     * @method
     * @example <caption>Invoke the <code class="prettyprint">refresh</code> method:</caption>
     *  myTabBar.refresh();
     */
    // Fragments:

    /**
     * <table class="keyboard-table">
     *   <thead>
     *     <tr>
     *       <th>Target</th>
     *       <th>Gesture</th>
     *       <th>Action</th>
     *     </tr>
     *   </thead>
     *   <tbody>
     *     <tr>
     *       <td rowspan="2">List Item</td>
     *       <td><kbd>Tap</kbd></td>
     *       <td>Selects the item.</td>
     *     </tr>
     *     <tr>
     *       <td><kbd>Press & Hold</kbd></td>
     *       <td>Display context menu</td>
     *     </tr>
     *     <tr>
     *       <td>Overflow Menu button</td>
     *       <td><kbd>Tap</kbd></td>
     *       <td>Open menu. Refer <a href="oj.ojButton.html#touch-section">menu button</a> touch documentation. Note: This is applicable only for Horizontal Tab Bar when <code class="prettyprint">overflow</code> is set to <code class="prettyprint">popup</code>. </td>
     *     </tr>
     *   </tbody>
     * </table>
     *
     * @ojfragment touchDoc - Used in touch gesture section of classdesc, and standalone gesture doc
     * @memberof oj.ojTabBar
     */

    /**
     * <table class="keyboard-table">
     *   <thead>
     *     <tr>
     *       <th>Target</th>
     *       <th>Key</th>
     *       <th>Action</th>
     *     </tr>
     *   </thead>
     *   <tbody>
     *     <tr>
     *       <td rowspan="9">List Item</td>
     *       <td><kbd>Enter</kbd> or <kbd>Space</kbd></td>
     *       <td>Selects list item.</td>
     *     </tr>
     *     <tr>
     *       <td><kbd>UpArrow</kbd></td>
     *       <td>Moves focus to the previous visible list item.</td>
     *     </tr>
     *     <tr>
     *       <td><kbd>DownArrow</kbd></td>
     *       <td>Moves focus to the next  visible list item</td>
     *     </tr>
     *     <tr>
     *       <td><kbd>RightArrow</kbd> (<kbd>LeftArrow</kbd> in RTL)</td>
     *       <td>For horizontal tab bar,focus will be moved to next visible item.
     *       </td>
     *     </tr>
     *     <tr>
     *       <td><kbd>LeftArrow</kbd> (<kbd>RightArrow</kbd> in RTL)</td>
     *       <td>For horizontal tab bar,focus will be moved to previous visible item.</td>
     *     </tr>
     *     <tr>
     *       <td><kbd>Home</kbd></td>
     *       <td>Moves focus to the first visible list item.</td>
     *     </tr>
     *     <tr>
     *       <td><kbd>End</kbd></td>
     *       <td>Moves focus to the last visible list item.</td>
     *     </tr>
     *     <tr>
     *       <td><kbd>F2</kbd></td>
     *       <td>If focus is on a list item, pressing F2 will make its contents accessible using TAB.</td>
     *     </tr>
     *     <tr>
     *       <td><kbd>Esc</kbd></td>
     *       <td>When F2 mode is enabled, press Esc to exit F2 mode.</td>
     *     </tr>
     *     <tr>
     *       <td>Overflow Menu button</td>
     *       <td><kbd>Enter or Space</kbd></td>
     *       <td>Open menu. Refer <a href="oj.ojButton.html#touch-section">menu button</a> touch documentation. Note: This is applicable only for Horizontal Tab Bar when <code class="prettyprint">overflow</code> is set to <code class="prettyprint">popup</code>. </td>
     *     </tr>     
     *   </tbody>
     * </table>
     *
     *
     * @ojfragment keyboardDoc - Used in keyboard section of classdesc, and standalone gesture doc
     * @memberof oj.ojTabBar
     */

    /**
     * {@ojinclude "name":"ojStylingDocIntro"}
     * <table class="generic-table styling-table">
     *   <thead>
     *     <tr>
     *       <th>{@ojinclude "name":"ojStylingDocClassHeader"}</th>
     *       <th>{@ojinclude "name":"ojStylingDocDescriptionHeader"}</th>
     *       <th>{@ojinclude "name":"ojStylingDocExampleHeader"}</th>
     *     </tr>
     *   </thead>
     *   <tbody>
     *     <tr>
     *       <td>oj-tabbar-stack-icon-label</td>
     *       <td>Displays horizontal Tab Bar with icon and label stacked. Applicable only when <code class="prettyprint">edge</code> is <code class="prettyprint">top</code>.</td>
     *       <td>
     *          <pre class="prettyprint">
     *<code>&lt;oj-tab-bar class="oj-tabbar-stack-icon-label" >
     *  &lt;ul>    
     *    &lt;li id="foo">
     *      &lt;a href="#">
     *        &lt;span class="oj-tabbar-item-icon demo-icon-font-24 demo-palette-icon-24">
     *        &lt;/span>
     *        Foo
     *      &lt;/a>
     *    &lt;/li>
     *  &lt;/ul>
     *&lt;/oj-tab-bar>
     *</code></pre>
     *       </td>
     *     </tr>
     *     <tr>
     *       <td>oj-tabbar-category-divider</td>
     *       <td>Use this class to add horizontal divider line between two categories of items.</td>
     *       <td>
     *          <pre class="prettyprint">
     *<code>&lt;oj-tab-bar>
     *  &lt;ul>
     *    &lt;li ...> &lt;/li>
     *    &lt;li class="oj-tabbar-category-divider"> &lt;/li>    
     *    &lt;li id="foo">
     *      &lt;a href="#">
     *        &lt;span class="oj-tabbar-item-icon demo-icon-font-24 demo-palette-icon-24">
     *        &lt;/span>
     *        Foo
     *      &lt;/a>
     *    &lt;/li>
     *    &lt;li ...> &lt;/li>
     *  &lt;/ul>
     *&lt;/oj-tab-bar>
     *</code></pre>
     *       </td>     
     *     </tr>
     *     <tr>
     *       <td>oj-tabbar-item-icon</td>
     *       <td>Use this class to add icon to list item.</td>
     *       <td>
     *          <pre class="prettyprint">
     *<code>&lt;oj-tab-bar>
     *  &lt;ul>    
     *    &lt;li id="foo">
     *      &lt;a href="#">
     *        &lt;span class="oj-tabbar-item-icon demo-icon-font-24 demo-palette-icon-24">
     *        &lt;/span>
     *        Foo
     *      &lt;/a>
     *    &lt;/li>
     *  &lt;/ul>
     *&lt;/oj-tab-bar></code></pre>
     *       </td>
     *     </tr>
     *     <tr>
     *       <td>oj-tabbar-item-title</td>
     *       <td>When arbitrary content is placed inside item's content area, it's title text can be marked using this style class. This helps component in identifying the Item's label.
     *       </td>
     *       <td>
     * <pre class="prettyprint">
     * <code>&lt;li>
     *   &lt;div>
     *     &lt;span class="oj-tabbar-item-title">Play&lt;/span>
     *     &lt;button>Button&lt;/button>
     *   &lt;/div>
     * &lt;/li>
     * </code></pre>
     *       </td>
     *     </tr>
     *     <tr>
     *       <td>oj-tabbar-item-text-wrap</td>
     *       <td>Use this class to wrap item label text. Note: On IE11, this is not supported when <code class="prettyprint">overflow</code> attribute is set to <code class="prettyprint">popup</code>.</td>
     *       <td>
     *          <pre class="prettyprint">
     *<code>&lt;oj-tab-bar class="oj-tabbar-item-text-wrap" >
     *  &lt;ul>    
     *    &lt;li id="foo">
     *      &lt;a href="#">
     *        &lt;span class="oj-tabbar-item-icon demo-icon-font-24 demo-palette-icon-24">
     *        &lt;/span>
     *        Foo
     *      &lt;/a>
     *    &lt;/li>
     *  &lt;/ul>
     *&lt;/oj-tab-bar>
     *</code></pre>
     *       </td>     
     *     </tr>
     *     <tr>
     *       <td>oj-tabbar-item-dividers</td>
     *       <td>Use this class to show dividers between horizontal tab bar items.</td>
     *       <td>
     *          <pre class="prettyprint">
     *<code>&lt;oj-tab-bar class="oj-tabbar-item-dividers" >
     *  &lt;ul>    
     *    &lt;li id="foo">
     *       &lt;a href="#">
     *         &lt;span class="oj-tabbar-item-icon demo-icon-font-24 demo-palette-icon-24">&lt;/span>
     *         Foo
     *       &lt;/a>
     *    &lt;/li>
     *  &lt;/ul>
     *&lt;/oj-tab-bar>
     *</code></pre>
     *       </td>     
     *     </tr>     
     *     </tr>
     *     <tr>
     *       <td>oj-sm-condense</td>
     *       <td>Use this class to condense horizontal tab bar items on small screens and larger.
     *       </td>
     *       <td rowspan="4">
     *          <pre class="prettyprint">
     *<code>&lt;oj-tab-bar class="oj-sm-condense" >
     *  &lt;ul>    
     *    &lt;li id="foo">
     *      &lt;a href="#">
     *        &lt;span class="oj-tabbar-item-icon demo-icon-font-24 demo-palette-icon-24">&lt;/span>
     *        Foo
     *      &lt;/a>
     *    &lt;/li>
     *  &lt;/ul>
     *&lt;/oj-tab-bar>
     *</code></pre>
     *       </td>      
     *     </tr>
     *     <tr>
     *       <td>oj-md-condense</td>
     *       <td>Use this class to condense horizontal tab bar items on medium screens and larger.
     *       </td>
     *     </tr>
     *     <tr>
     *       <td>oj-lg-condense</td>
     *       <td>Use this class to condense horizontal tab bar items on large screens and larger.
     *       </td>
     *     </tr>
     *     <tr>
     *       <td>oj-xl-condense</td>
     *       <td>Use this class to condense horizontal tab bar items on extra large screens and larger.
     *       </td>
     *     </tr>
     *     <tr>
     *       <td>oj-tabbar-nofollow-link</td>
     *       <td> Use this class to prevent automatic navigation to the url specified on <code class="prettyprint">&lt;a></code> tag's <code class="prettyprint">href</code> attribute. In this case, navigation can be handled programmatically by using <code class="prettyprint">selectionChanged</code> event. This is useful to execute some custom tasks before browser triggers navigation.
     *       </td>
     *       <td>
     *          <pre class="prettyprint">
     *<code>&lt;oj-tab-bar class="oj-tabbar-nofollow-link" >
     *  &lt;ul>    
     *    &lt;li id="foo">&lt;a href="folder/foo.html">
     *      &lt;span 
     *        class="oj-tabbar-item-icon demo-icon-font-24 demo-palette-icon-24">&lt;/span>
     *      Foo&lt;/a>
     *    &lt;/li>
     *  &lt;/ul>
     *&lt;/oj-tab-bar>
     *</code></pre>
     *       </td>     
     *     </tr>
     *     <tr>
     *       <td>oj-focus-highlight</td>
     *       <td>{@ojinclude "name":"ojFocusHighlightDoc"}</td>
     *       <td></td>
     *     </tr>
     *   </tbody>
     * </table>
     *
     * @ojfragment stylingDoc - Used in Styling section of classdesc, and standalone Styling doc
     * @memberof oj.ojTabBar
     */

    // SubId Locators *****************************************************

    /**
     * <p>Sub-ID for the oj-tab-bar component's list item element.</p>
     *
     * <p>
     * To lookup the list items the locator object should have the following:
     * <ul>
     * <li><b>subId</b>: 'oj-tabbar-item'</li>
     * <li><b>key</b>: the <a href="#key-section">Key</a> of the item</li>
     * </ul>
     *
     * @ojsubid oj-tabbar-item
     * @memberof oj.ojTabBar
     *
     * @example <caption>Get the list item element with key 'foo':</caption>
     * var node = myTabBar.getNodeBySubId({'subId': 'oj-tabbar-item', 'key': 'foo'} );
     */
    

    // Node Context Objects *********************************************
    /**
     * <p>Context for the oj-tab-bar component's items.</p>
     *
     * @property {number} index the zero based item index
     * @property {Object|string} key the <a href="#key-section">Key</a> of the item
     *
     * @ojnodecontext oj-tabbar-item
     * @memberof oj.ojTabBar
     */
(function() {
var ojNavigationListMeta = {
  "properties": {
    "currentItem": {
      "type": "any",
      "writeback": true
    },
    "data": {},
    "display": {
      "type": "string",
      "enumValues": ["all", "icons"]
    },
    "drillMode": {
      "type": "string",
      "enumValues": ["sliding", "collapsible", "none"]
    },
    "edge": {
      "type": "string",
      "enumValues": ["top", "start"]
    },
    "hierarchyMenuThreshold": {
      "type": "number"
    },
    "item": {
      "type": "object",
      "properties": {
        "renderer": {},
        "selectable": {}
      }
    },
    "overflow": {
      "type": "string",
      "enumValues": ["popup", "hidden"]
    },
    "rootLabel": {
      "type": "string"
    },
    "selection": {
      "type": "any",
      "writeback": true
    }
  },
  "events": {
    "animateEnd": {},
    "animateStart": {},
    "beforeCollapse": {},
    "beforeCurrentItem": {},
    "beforeExpand": {},
    "beforeSelect": {},
    "collapse": {},
    "expand": {}
  },
  "methods": {
    "getContextByNode": {}
  },
  "extension": {
    _ALIASED_PROPS: {"hierarchyMenuThreshold":"hierarchyMenuDisplayThresholdLevel"},
    _WIDGET_NAME: "ojNavigationList"
  }
};
oj.CustomElementBridge.registerMetadata('oj-navigation-list', 'baseComponent', ojNavigationListMeta);
oj.CustomElementBridge.register('oj-navigation-list', {'metadata': oj.CustomElementBridge.getMetadata('oj-navigation-list')});
  
var ojTabBarMeta = {
  "properties": {
    "currentItem": {
      "type": "any",
      "writeback": true
    },
    "data": {},
    "display": {
      "type": "string",
      "enumValues": ["all", "icons"]
    },
    "edge": {
      "type": "string",
      "enumValues": ["top", "start", "end", "bottom"]
    },
    "item": {
      "type": "object",
      "properties": {
        "renderer": {},
        "selectable": {}
      }
    },
    "overflow": {
      "type": "string",
      "enumValues": ["popup", "hidden"]
    },
    "selection": {
      "type": "any",
      "writeback": true
    }
  },
  "events": {
    "animateEnd": {},
    "animateStart": {},
    "beforeCurrentItem": {},
    "beforeSelect": {}
  },
  "methods": {
    "getContextByNode": {}
  },
  "extension": {
    _WIDGET_NAME: "ojNavigationList"
  }
};

oj.CustomElementBridge.registerMetadata('oj-tab-bar', 'baseComponent', ojTabBarMeta);
oj.CustomElementBridge.register('oj-tab-bar', {
    'metadata': oj.CustomElementBridge.getMetadata('oj-tab-bar')});

})();
});
