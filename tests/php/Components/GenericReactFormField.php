<?php

namespace MaximeRainville\SilverstripeReact\Tests\Components;

use MaximeRainville\SilverstripeReact\ReactFormField;

class GenericReactFormField extends ReactFormField
{

    public function __construct($renderInput, $name, $title = null, $value = null)
    {
        $this->renderInput = $renderInput;
        parent::__construct($name, $title, $value);
    }

    public function getComponent(): string
    {
        return 'GenericReactFormField';
    }
}
