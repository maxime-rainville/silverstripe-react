/* global ss */
/* eslint-disable import/no-extraneous-dependencies */
import jQuery from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Injector, { loadComponent } from 'lib/Injector';

Injector.ready(() => {
  jQuery.entwine('ss', ($) => {
    $('.js-injector-boot .react-form-field').entwine({

      Component: null,
      Value: null,
      HiddenInput: null,
      Root: null,

      onmatch() {
        const cmsContent = this.closest('.cms-content').attr('id');
        const context = (cmsContent)
          ? { context: cmsContent }
          : {};

        const componentName = this.data('component');
        const Component = loadComponent(componentName, context);
        this.setComponent(Component);

        const hiddenInputId = this.data('hidden-input-id');
        if (hiddenInputId) {
          const input = $(`#${hiddenInputId}`);
          this.setHiddenInput(input);
        }

        this.setRoot(ReactDOM.createRoot(this[0]));

        this._super();
        this.refresh();
      },

      refresh() {
        const props = this.getProps();
        const Component = this.getComponent();
        const root = this.getRoot();
        root.render(<Component {...props} noHolder />);
      },

      handleChange(event, { value }) {
        const input = this.getHiddenInput();
        if (input) {
          input.val(value);
          input.trigger('change');
        }
        this.setValue(value);
        this.refresh();
      },

      /**
       * Find the selected node and get attributes associated to attach the data to the form
       *
       * @returns {Object}
       */
      getProps() {
        const props = $(this).data('props') || {};
        const value = this.getValue();
        if (value !== null) {
          props.value = value;
        }
        props.onChange = this.handleChange.bind(this);
        return props;
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
