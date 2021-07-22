<?php

namespace MaximeRainville\SilverstripeReact;

use SilverStripe\Forms\FormField;

abstract class ReactFormField extends FormField implements ReactComponent
{

    /**
     * @return array
     */
    public function getAttributes()
    {
        $attrs = [
            'class' => 'react-form-field',
            'data-component' => $this->getComponent(),
            'data-render-input' => false,
            'data-props' => json_encode($this->getProps()),
        ];

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
            'readonly' => $this->isReadonly(),
            'autofocus' => $this->isAutofocus()
        ];
    }

    abstract public function getComponent(): string;
}
