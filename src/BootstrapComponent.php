<?php

namespace MaximeRainville\SilverstripeReact;

use SilverStripe\Core\Convert;

trait BootstrapComponent
{

    /**
     * People will need to copy this to the class implementing the trait if they define their own $casting
     * @var string[]
     */
    private static $casting = [
        'AttributesHTML' => 'HTMLFragment'
    ];

    protected $attributes = [];

    protected $extraClasses;

    public function forTemplate()
    {
        $return = $this->renderWith($this->getTemplates());
        return $return;
    }

    public function getTemplates(): array
    {
        return [self::class, 'MaximeRainville\\SilverstripeReact\\BootstrapComponent'];
    }

    public function getAttributesHTML($attrs = null)
    {
        $exclude = (is_string($attrs)) ? func_get_args() : null;

        $attrs = $this->getAttributes();

        // Remove empty
        $attrs = array_filter((array)$attrs, function ($value) {
            return ($value || $value === 0);
        });

        // Remove excluded
        if ($exclude) {
            $attrs = array_diff_key($attrs, array_flip($exclude));
        }

        // Prepare HTML-friendly 'method' attribute (lower-case)
        if (isset($attrs['method'])) {
            $attrs['method'] = strtolower($attrs['method']);
        }

        // Create markup
        $parts = [];
        foreach ($attrs as $name => $value) {
            if ($value === true) {
                $value = $name;
            }

            $parts[] = sprintf('%s="%s"', Convert::raw2att($name), Convert::raw2att($value));
        }

        return implode(' ', $parts);
    }

    /**
     * @param string $name
     * @param string $value
     * @return $this
     */
    public function setAttribute($name, $value)
    {
        $this->attributes[$name] = $value;
        return $this;
    }

    /**
     * @param string $name
     * @return string
     */
    public function getAttribute($name)
    {
        if (isset($this->attributes[$name])) {
            return $this->attributes[$name];
        }
        return null;
    }

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

    /**
     * Compiles all CSS-classes.
     *
     * @return string
     */
    public function extraClass()
    {
        $extraClasses = [];
        if (!empty($this->extraClasses)) {
            $extraClasses = $this->extraClasses;
        }

        $extraClasses[] = 'bootstrap-component';

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

    abstract public function getProps(): array;

    abstract public function getComponent(): string;
}
