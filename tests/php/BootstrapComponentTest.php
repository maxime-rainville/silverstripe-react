<?php

namespace MaximeRainville\SilverstripeReact\Tests;

use MaximeRainville\SilverstripeReact\BootstrapComponent;
use MaximeRainville\SilverstripeReact\Tests\Components\GenericComponent;
use SilverStripe\Dev\SapphireTest;

class BootstrapComponentTest extends SapphireTest
{

    protected $usesDatabase = false;

    public function testGetTemplates()
    {
        $component = new GenericComponent();

        $this->assertEquals(
            [GenericComponent::class, BootstrapComponent::class],
            $component->getTemplates(),
            'getTemplates return the FQN classname and trait name'
        );
    }

    public function testGetAttributes()
    {
        $component = new GenericComponent();

        $this->assertEquals(
            [
                'class' => 'bootstrap-component',
                'data-component' => 'GenericComponent',
                'data-props' => json_encode(['title' => 'hello world'])
            ],
            $component->getAttributes(),
            'getAttributes minimally returns the class, component name and props'
        );
    }

    public function testExtraClass()
    {
        $component = new GenericComponent();

        $this->assertEquals(
            'bootstrap-component',
            $component->extraClass(),
            'extraClass returns the dofault bootstrap class'
        );

        $component->addExtraClass('boom');
        $this->assertEquals(
            'boom bootstrap-component',
            $component->extraClass(),
            'Addititonal call can be added with addExtraClass'
        );

        $component->removeExtraClass('boom');
        $this->assertEquals(
            'bootstrap-component',
            $component->extraClass(),
            'Additional class can be removed with removeExtraClass'
        );
    }
}
