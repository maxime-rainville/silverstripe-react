/* global ss */
/* eslint-disable import/no-extraneous-dependencies */
import jQuery from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Injector, { loadComponent } from 'lib/Injector';

Injector.ready(() => {
  jQuery.entwine('ss', ($) => {
    $('.js-injector-boot .bootstrap-component').entwine({

      Component: null,
      Root: null,

      onmatch() {
        const cmsContent = this.closest('.cms-content').attr('id');
        const context = (cmsContent)
          ? { context: cmsContent }
          : {};

        const componentName = this.data('component');

        /**
         * Define variable "Component" after Injector found Component
         * in existing Components
         */
        let Component;

        try {
          Injector.component.get(componentName);
          Component = loadComponent(componentName, context);
        } catch (error) {
          // eslint-disable-next-line no-console
          console.error(error.message);
          return;
        }

        this.setComponent(Component);
        this.setRoot(ReactDOM.createRoot(this[0]));
        this._super();
        this.refresh();
      },

      refresh() {
        const props = this.getProps();
        const Component = this.getComponent();
        const root = this.getRoot();
        root.render(<Component {...props} />);
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
