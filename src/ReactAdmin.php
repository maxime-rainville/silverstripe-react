<?php

namespace MaximeRainville\SilverstripeReact;

use SilverStripe\Admin\LeftAndMain;
use SilverStripe\Control\HTTPRequest;
use SilverStripe\Control\HTTPResponse;
use SilverStripe\View\AttributesHTML;
use SilverStripe\View\Requirements;

abstract class ReactAdmin extends LeftAndMain implements ReactComponent
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

    private static $allowed_actions = [
        'index',
        'notfound'
    ];

    private static $url_handlers = [
        // This matches thi index routo
        '' => 'index',

        // This matches any other route but return a 404 response code
        '//$*' => 'notfound',
    ];

    public function forTemplate()
    {
        $return = $this->renderWith($this->getTemplates());
        return $return;
    }

    /**
     * @return array
     */
    protected function getDefaultAttributes(): array
    {
        return [
            'class' => $this->extraClass()
        ];
    }


    public function getTemplates(): array
    {
        return [self::class, LeftAndMain::class];
    }

    protected function getDefaultExtraClasses(): array
    {
        return ['react-admin', 'cms-content'];
    }

    /**
     * @return HTTPResponse
     */
    public function notfound(HTTPRequest $request)
    {
        // This just tries to return a 404 when the route is not found but still let the front end handle it
        return $this->index($request)->setStatusCode(404);
    }

    /**
     * @param HTTPRequest $request
     * @return HTTPResponse
     */
    public function index($request)
    {
        $bootstrapConfig = [
            'configKey' => static::class,
            'component' => $this->getComponent(),
            'props' => $this->getProps(),
        ];
        Requirements::customScript(
            'var reactAdminConfig = ' .
            json_encode($bootstrapConfig) .
            ';',
        );
        return parent::index($request);
    }

    public function getClientConfig()
    {
        $baseLink = $this->Link();

        return array_merge(parent::getClientConfig(), [
            'reactRouter' => true,
        ]);
    }

    public function getComponent(): string
    {
        return 'ReactAdminDefaultComponent';
    }

}
