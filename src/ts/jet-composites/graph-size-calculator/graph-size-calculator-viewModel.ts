"use strict";

import * as ko from "knockout";
import componentStrings = require("ojL10n!./resources/nls/graph-size-calculator-strings");
import Context = require("ojs/ojcontext");
import Composite = require("ojs/ojcomposite");
import * as HtmlUtils from 'ojs/ojhtmlutils';
import "ojs/ojknockout";
import "ojs/ojformlayout";
import "ojs/ojinputtext";
import "ojs/ojbutton";
import "ojs/ojlabel";
import "ojs/ojbinddom";
import {ojBindDom} from "ojs/ojbinddom";

export default class ViewModel implements Composite.ViewModel<Composite.PropertiesType> {
    busyResolve: (() => void);
    composite: Element;
    messageText: ko.Observable<string>;
    properties: Composite.PropertiesType;
    res: { [key: string]: string };

    originalGraphConfig: ko.Observable<string>;
    domBindingConfig: ojBindDom.Config<any>;

    constructor(context: Composite.ViewModelContext<Composite.PropertiesType>) {        
        //At the start of your viewModel constructor
        const elementContext: Context = Context.getContext(context.element);
        const busyContext: Context.BusyContext = elementContext.getBusyContext();
        const options = {"description": "Web Component Startup - Waiting for data"};
        this.busyResolve = busyContext.addBusyState(options);

        this.composite = context.element;

        //Example observable
        this.messageText = ko.observable("Hello from graph-size-calculator");
        this.originalGraphConfig = ko.observable("Hello");
        this.properties = context.properties;
        this.res = componentStrings["graph-size-calculator"];
        this.domBindingConfig = {
            view: HtmlUtils.stringToNodeArray(""),
            data: {
            }
        };

        // Example for parsing context properties
        // if (context.properties.name) {
        //     parse the context properties here
        // }

        //Once all startup and async activities have finished, relocate if there are any async activities
        this.busyResolve(); 
    }

    onSave(event: Event, data: ViewModel, context: Composite.ViewModelContext<Composite.PropertiesType>) {
        document.getElementById("graphConfigLoader").classList.toggle("hide");

        data.renderCalculator(data);
    }

    private renderCalculator(data: ViewModel) {
        let wrapper = document.getElementById("wrapper");

        let viewStr: string = '<oj-label for="[[inputId1]]">oj-input-text element</oj-label>';
        data.domBindingConfig = {
            view: HtmlUtils.stringToNodeArray(viewStr),
            data: {
                inputId1: 'text-input1',
            }
        };
    }

    //Lifecycle methods - implement if necessary 

    activated(context: Composite.ViewModelContext<Composite.PropertiesType>): Promise<any> | void {
    
    };

    connected(context: Composite.ViewModelContext<Composite.PropertiesType>): void {
    
    };

    bindingsApplied(context: Composite.ViewModelContext<Composite.PropertiesType>): void {
    
    };

    propertyChanged(context: Composite.PropertyChangedContext<Composite.PropertiesType>): void {
    
    };

    disconnected(element: Element): void {
    
    };
};