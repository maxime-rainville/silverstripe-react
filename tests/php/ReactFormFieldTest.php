<?php

namespace MaximeRainville\SilverstripeReact\Tests;

use MaximeRainville\SilverstripeReact\BootstrapComponent;
use MaximeRainville\SilverstripeReact\Tests\Components\GenericComponent;
use MaximeRainville\SilverstripeReact\Tests\Components\GenericReactFormField;
use SilverStripe\Dev\SapphireTest;

class ReactFormFieldTest extends SapphireTest
{

    protected $usesDatabase = false;

    public function testGetAttributes()
    {
        $field = new GenericReactFormField(false, 'test');

        $this->assertEquals(
            [
                'class' => 'react-form-field',
                'data-component' => 'GenericReactFormField',
                'data-props' => json_encode($field->getProps())
            ],
            $field->getAttributes(),
            'getAttributes minimally returns the class, component name and props'
        );

        $field = new GenericReactFormField(true, 'test');

        $this->assertEquals(
            [
                'class' => 'react-form-field',
                'data-component' => 'GenericReactFormField',
                'data-props' => json_encode($field->getProps()),
                'data-hidden-input-id' => $field->HiddenID()
            ],
            $field->getAttributes(),
            'getAttributes also returns an hidden ID when the components need to render an hidden input'
        );
    }

    public function testGetProps()
    {
        $field = new GenericReactFormField(false, 'testName', 'test title', 'test value');

        $this->assertEquals(
            [
                'name' => 'testName',
                'value' => 'test value',
                'extraClass' => 'genericreactform',
                'id' => 'testName',
                'disabled' => false,
                'readOnly' => false,
                'autofocus' => false,
                'title' => 'test title'
            ],
            $field->getProps(),
            'Default props are outputted'
        );

        $field->addExtraClass('testClass');
        $this->assertEquals(
            [
                'name' => 'testName',
                'value' => 'test value',
                'extraClass' => 'genericreactform testClass',
                'id' => 'testName',
                'disabled' => false,
                'readOnly' => false,
                'autofocus' => false,
                'title' => 'test title'
            ],
            $field->getProps(),
            'Props include extra classes'
        );

        $field->setDisabled(true);
        $this->assertEquals(
            [
                'name' => 'testName',
                'value' => 'test value',
                'extraClass' => 'genericreactform testClass',
                'id' => 'testName',
                'disabled' => true,
                'readOnly' => false,
                'autofocus' => false,
                'title' => 'test title'
            ],
            $field->getProps(),
            'Props reflect Disabled state'
        );

        $field->setReadonly(true);
        $this->assertEquals(
            [
                'name' => 'testName',
                'value' => 'test value',
                'extraClass' => 'genericreactform testClass',
                'id' => 'testName',
                'disabled' => true,
                'readOnly' => true,
                'autofocus' => false,
                'title' => 'test title'
            ],
            $field->getProps(),
            'Props reflect Readonly state'
        );

        $field->setAutofocus(true);
        $this->assertEquals(
            [
                'name' => 'testName',
                'value' => 'test value',
                'extraClass' => 'genericreactform testClass',
                'id' => 'testName',
                'disabled' => true,
                'readOnly' => true,
                'autofocus' => true,
                'title' => 'test title'
            ],
            $field->getProps(),
            'Props reflect auto focus state'
        );
    }
}
