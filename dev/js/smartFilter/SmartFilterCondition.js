import { SmartFilterConditionType } from './SmartFilter.js';
import { SmartFilterPropertyType } from './SmartFilter.js';
import { SmartFilterManager } from './SmartFilterManager.js';


export class SmartFilterCondition {


    constructor() {
        this.and = true;
        this.conditionType = SmartFilterConditionType.contains;
        this.propertyType = SmartFilterPropertyType.nodeName;
        this.propertyName = "";
        this.text =  "";
        this.childFilter = null;
        this.smartFilterID = null;

    }

    toJSON() {

        if (this.propertyType == SmartFilterPropertyType.smartFilter &&
            !this.smartFitlerID) {

            let f = SmartFilterManager.getSmartFilterByName(this.text);
            if (f) {
                this.smartFilterID =  f.filter._id;
            }
        }

        return {
            and: this.and,
            conditionType: this.conditionType,
            propertyType: this.propertyType,
            propertyName: JSON.parse(JSON.stringify(this.propertyName)),
            text: this.text,
            childFilter: this.childFilter,
            smartFilterID: this.smartFilterID
        };
    }

    fromJSON(def) {
        this.and = def.and;
        this.conditionType = def.conditionType;
        this.propertyType = def.propertyType;
        this.propertyName = def.propertyName;
        this.text = def.text;
        this.childFilter = def.childFilter;
        this.smartFilterID = def.smartFilterID;

    }

    setSmartFilterID(id) {
        this.smartFitlerID = id;
    }

    getSmartFilterID() {
        return this.smartFilterID;
    }

    setAndOr(andor) {
        this.and = andor;
    }

    getAndOr() {
        return this.and;
    }

    setConditionType(conditionType) {
        this.conditionType = conditionType;
    }

    getConditionType() {
        return this.conditionType;
    }

    
    setPropertyName(propertyName) {
        this.propertyName = propertyName;
    }

    getPropertyName() {
        return this.propertyName;
    }

    setPropertyType(propertyType) {
        this.propertyType = propertyType;
    }

    getPropertyType() {
        return this.propertyType;
    }


    setText(text) {
        this.text = text;
    }

    getText() {
        return this.text;
    }


    setChildFilter(childFilter) {
        this.childFilter = childFilter
    }

    
    getChildFilter() {
        return this.childFilter;
    }
}