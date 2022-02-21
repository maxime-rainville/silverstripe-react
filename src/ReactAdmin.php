<?php

namespace MaximeRainville\SilverstripeReact;

use SilverStripe\Admin\LeftAndMain;

abstract class ReactAdmin extends LeftAndMain implements ReactComponent
{
    use BootstrapComponent;

    public function getTemplates(): array
    {
        return [self::class, LeftAndMain::class];
    }

    protected function getDefaultExtraClasses(): array
    {
        return ['react-admin'];
    }

}
