<?php

namespace MaximeRainville\SilverstripeReact;

use SilverStripe\Forms\FormField;

/**
 * Base class that can be extended to create a React Form field.
 *
 */
abstract class ReactFormField extends FormField implements ReactComponent
{

    /**
     * Whether an input taf shoulde be rendered when using the React component
     * in an entwine form. If the React implementation of the field does not output
     * an input tag (or someother HTML form field), this should be set to true.
     * @var bool
     */
    protected $renderInput = false;

    /**
     * @return array
     */
    public function getAttributes()
    {
        $attrs = [
            'class' => 'react-form-field',
            'data-component' => $this->getComponent(),
            'data-props' => json_encode($this->getProps()),
        ];

        if ($this->RenderInput()) {
            $attrs['data-hidden-input-id'] = $this->HiddenID();
        }

        $attrs = array_merge($attrs, $this->attributes);

        $this->extend('updateAttributes', $attributes);

        return $attrs;
    }

    public function getProps(): array
    {
        return [
            'name' => $this->getName(),
            'value' => $this->Value(),
            'extraClass' => $this->extraClass(),
            'id' => $this->ID(),
            'disabled' => $this->isDisabled(),
            'readOnly' => $this->isReadonly(),
            'autofocus' => $this->isAutofocus(),
            'title' => $this->title
        ];
    }

    abstract public function getComponent(): string;

    /**
     * Control if the SS template should render an hidden input tag
     */
    public function RenderInput(): bool
    {
        return $this->renderInput;
    }

    public function HiddenID(): string
    {
        return $this->ID() . '_HiddenValueField';
    }
}
