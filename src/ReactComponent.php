<?php

namespace MaximeRainville\SilverstripeReact;

use SilverStripe\Forms\Tests\GridField\GridFieldTest\HTMLFragments;

/**
 * ViewableData object that can be rendered as a react component in the
 * Silverstripe CMS UI.
 */
interface ReactComponent
{

    /**
     * List of props to initialise the react component with
     * @return array
     */
    public function getProps(): array;

    /**
     * Name of the React Component used to render this object on the front end
     * @return string
     */
    public function getComponent(): string;
}
