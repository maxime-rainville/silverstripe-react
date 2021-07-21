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
            'class' => $this->extraClass(),
            'data-component' => $this->getComponent(),
            'data-props' => json_encode($this->getProps()),
        ];

        $attrs = array_merge($attrs, $this->attributes);

        return $attrs;
    }

    abstract public function getProps(): array;

    abstract public function getComponent(): string;
}
