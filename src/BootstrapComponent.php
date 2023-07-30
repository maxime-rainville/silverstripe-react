<?php

namespace MaximeRainville\SilverstripeReact;

use SilverStripe\Core\Convert;
use SilverStripe\View\AttributesHTML;

trait BootstrapComponent
{
    use AttributesHTML;
    use ExtraClass;

    /**
     * People will need to copy this to the class implementing the trait if they define their own $casting
     * @var string[]
     */
    private static $casting = [
        'AttributesHTML' => 'HTMLFragment'
    ];

    public function forTemplate()
    {
        $return = $this->renderWith($this->getTemplates());
        return $return;
    }

    public function getTemplates(): array
    {
        return [self::class, 'MaximeRainville\\SilverstripeReact\\BootstrapComponent'];
    }

    /**
     * @return array
     */
    protected function getDefaultAttributes(): array
    {
        return [
            'class' => $this->extraClass(),
            'data-component' => $this->getComponent(),
            'data-props' => json_encode($this->getProps()),
        ];
    }

        /**
     * Default default extra classes that should always be present.
     */
    protected function getDefaultExtraClasses(): array
    {
        return ['bootstrap-component'];
    }

    abstract public function getProps(): array;

    abstract public function getComponent(): string;
}
