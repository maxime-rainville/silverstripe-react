<?php

namespace MaximeRainville\SilverstripeReact;

/**
 * Apply this trait to ViewableData classes that can have extra classes applied to them.
 */
trait ExtraClass
{

    /** @var string[] $extraClasses */
    protected $extraClasses = [];

    /**
     * Compiles all CSS-classes.
     *
     * @return string
     */
    public function extraClass()
    {
        $extraClasses = array_merge(
            $this->getDefaultExtraClasses(),
            $this->extraClasses
        );


        return implode(' ', array_unique($extraClasses));
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

    /**
     * Default default extra classes that should always be present.
     */
    protected function getDefaultExtraClasses(): array
    {
        return [];
    }


}
