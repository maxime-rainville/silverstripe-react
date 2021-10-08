<?php

namespace MaximeRainville\SilverstripeReact\Tests\Components;

use MaximeRainville\SilverstripeReact\BootstrapComponent;
use SilverStripe\View\ViewableData;

class GenericComponent extends ViewableData
{
    use BootstrapComponent;

    public function getProps(): array
    {
        return [
            'title' => 'hello world'
        ];
    }

    public function getComponent(): string
    {
        return 'GenericComponent';
    }
}
