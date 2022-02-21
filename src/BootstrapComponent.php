<?php

namespace MaximeRainville\SilverstripeReact;

use SilverStripe\Core\Convert;
use SilverStripe\View\AttributesHTML;

trait BootstrapComponent
{
    use AttributesHTML;

    /**
     * People will need to copy this to the class implementing the trait if they define their own $casting
     * @var string[]
     */
    private static $casting = [
        'AttributesHTML' => 'HTMLFragment'
    ];

    protected $extraClasses = [''];

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
     * Compiles all CSS-classes.
     *
     * @return string
     */
    public function extraClass()
    {
        $extraClasses = array_merge(
            $this->getDefaultExtraClasses(),
            $this->extraClasses,
            ['bootstrap-component']
        );


        return implode(' ', array_unique($extraClasses));
    }

    protected function getDefaultExtraClasses(): array
    {
        return [];
    }

    /**
     * Add a CSS-class to the form-container. If needed, multiple classes can
     * be added by delimiting a string with spaces.
     *
     * @param string $class A string containing a classname or several class
     *              names delimited by a single space.
     * @return $this
     */
    public function addExtraClass($class)
    {
        //split at white space
        $classes = preg_split('/\s+/', $class);
        foreach ($classes as $class) {
            //add classes one by one
            $this->extraClasses[$class] = $class;
        }
        return $this;
    }

    /**
     * Remove a CSS-class from the form-container. Multiple class names can
     * be passed through as a space delimited string
     *
     * @param string $class
     * @return $this
     */
    public function removeExtraClass($class)
    {
        //split at white space
        $classes = preg_split('/\s+/', $class);
        foreach ($classes as $class) {
            //unset one by one
            unset($this->extraClasses[$class]);
        }
        return $this;
    }

    abstract public function getProps(): array;

    abstract public function getComponent(): string;
}
