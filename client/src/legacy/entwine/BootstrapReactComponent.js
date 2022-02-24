/* global ss */
/* eslint-disable import/no-extraneous-dependencies */
import jQuery from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import Injector, { loadComponent } from 'lib/Injector';

Injector.ready(() => {
  jQuery.entwine('ss', ($) => {
    $('.js-injector-boot .bootstrap-component').entwine({

      Component: null,

      onmatch() {
        const cmsContent = this.closest('.cms-content').attr('id');
        const context = (cmsContent)
          ? { context: cmsContent }
          : {};

        const componentName = this.data('component');

        /** 
         * Define variable "Component" after Injector found Component
         * in existing Components
        **/
        let Component;

        /**
         * If Component name is set in data-component attribute and it is not empty string.
         * Then try to get Component from existing Components.
         * If Component does not exist load ErrorComponent.
         * If Component exists load Component.
         * If data-component attribute doesn't exist load DefaultComponent
        **/
        if (typeof componentName === 'string' && componentName !== '') {
          let isExist = false;
          //try to get Component from existing Components
          try {
            Injector.component.get(componentName);
            isExist = true;
          } catch (error) {
            console.warn(error.message);
          }
          // if Component exists load Component
          if (isExist) {
            Component = loadComponent(componentName, context);
          } else {
            Component = loadComponent("ErrorComponent");
          }
        } else {
          Component = loadComponent("DefaultComponent");
        }

        this.setComponent(Component);
        this._super();
        this.refresh();
      },

      refresh() {
        const props = this.getProps();
        const Component = this.getComponent();
        ReactDOM.render(<Component {...props} />, this[0]);
      },

      /**
       * Find the selected node and get attributes associated to attach the data to the form
       *
       * @returns {Object}
       */
      getProps() {
        return $(this).data('props') || {};
      },

      /**
       * Remove the component when unmatching
       */
      onunmatch() {
        ReactDOM.unmountComponentAtNode(this[0]);
      },
    });
  });
});
