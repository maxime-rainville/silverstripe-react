import React from 'react';
import Toolbar from 'components/Toolbar/Toolbar';
import { Component as Breadcrumb } from 'components/Breadcrumb/Breadcrumb';

const HeaderComponent = ({ breadcrumbs }) => {

    return (
        <Toolbar className="fill-width">
            <Breadcrumb multiline crumbs={breadcrumbs} />
        </Toolbar>
    );
};

export default HeaderComponent;