import React, { Component } from 'react';
import { Line, Bar } from "react-chartjs-2";

import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table.min.css';

export default class BarLineTec extends Component
{

 constructor(props) {
      super(props);
      this.state = {
        data: require('./data/dataSummary.json')


      }
    }

getData()
{
      console.log('pasa 1');
     let dataSummary = require('./data/dataSummary.json');
     this.setState({
        data:dataSummary
     });



     console.log('pasa 2');

}

componentDidMount() {

    this.getData();

}






  render() {



    return (
             <BootstrapTable  wrapperClasses="table-responsive" data={this.state.data}  pagination  exportCSV csvFileName='dessert.csv' striped={true} hover={true} condensed= {true} search={true} >

            <TableHeaderColumn dataField="product_name" isKey={true}  dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >product_name</TableHeaderColumn>
            <TableHeaderColumn dataField="generic_name" dataSort={ true } width={'350px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >generic_name</TableHeaderColumn>
            <TableHeaderColumn dataField="quantity" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >quantity</TableHeaderColumn>
            <TableHeaderColumn dataField="packaging_tags" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >packaging_tags</TableHeaderColumn>
              <TableHeaderColumn dataField="brands_tags" dataSort={ true } width={'350px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >brands_tags</TableHeaderColumn>
            <TableHeaderColumn dataField="categories" dataSort={ true } width={'650px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >categories</TableHeaderColumn>
                 <TableHeaderColumn dataField="labels" dataSort={ true } width={'750px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >labels</TableHeaderColumn>
                  <TableHeaderColumn dataField="ingredients_text" dataSort={ true } width={'1400px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >ingredients_text</TableHeaderColumn>
            <TableHeaderColumn dataField="allergens" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >allergens</TableHeaderColumn>
            <TableHeaderColumn dataField="allergens_en" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >allergens_en</TableHeaderColumn>
            <TableHeaderColumn dataField="traces" dataSort={ true } width={'350px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >traces</TableHeaderColumn>
            <TableHeaderColumn dataField="traces_tags" dataSort={ true } width={'350px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >traces_tags</TableHeaderColumn>
            <TableHeaderColumn dataField="traces_en" dataSort={ true } width={'350px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >traces_en</TableHeaderColumn>
            <TableHeaderColumn dataField="serving_size" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >serving_size</TableHeaderColumn>
            <TableHeaderColumn dataField="serving_quantity" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >serving_quantity</TableHeaderColumn>
            <TableHeaderColumn dataField="no_nutriments" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >no_nutriments</TableHeaderColumn>
            <TableHeaderColumn dataField="additives_n" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >additives_n</TableHeaderColumn>
            <TableHeaderColumn dataField="additives" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >additives</TableHeaderColumn>
            <TableHeaderColumn dataField="additives_tags" dataSort={ true } width={'350px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >additives_tags</TableHeaderColumn>
            <TableHeaderColumn dataField="additives_en" dataSort={ true } width={'650px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >additives_en</TableHeaderColumn>
            <TableHeaderColumn dataField="ingredients_from_palm_oil_n" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >ingredients_from_palm_oil_n</TableHeaderColumn>
            <TableHeaderColumn dataField="ingredients_from_palm_oil" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >ingredients_from_palm_oil</TableHeaderColumn>
            <TableHeaderColumn dataField="ingredients_from_palm_oil_tags" dataSort={ true } width={'250px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >ingredients_from_palm_oil_tags</TableHeaderColumn>
            <TableHeaderColumn dataField="ingredients_that_may_be_from_palm_oil_n" dataSort={ true } width={'250px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >ingredients_that_may_be_from_palm_oil_n</TableHeaderColumn>
            <TableHeaderColumn dataField="ingredients_that_may_be_from_palm_oil" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >ingredients_that_may_be_from_palm_oil</TableHeaderColumn>
            <TableHeaderColumn dataField="ingredients_that_may_be_from_palm_oil_tags" dataSort={ true } width={'350px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >ingredients_that_may_be_from_palm_oil_tags</TableHeaderColumn>
            <TableHeaderColumn dataField="nutrition_grade_fr" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >nutrition_grade_fr</TableHeaderColumn>
            <TableHeaderColumn dataField="nova_group" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >nova_group</TableHeaderColumn>
            <TableHeaderColumn dataField="pnns_groups_1" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >pnns_groups_1</TableHeaderColumn>
            <TableHeaderColumn dataField="pnns_groups_2" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >pnns_groups_2</TableHeaderColumn>
            <TableHeaderColumn dataField="states" dataSort={ true } width={'1400px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >states</TableHeaderColumn>
            <TableHeaderColumn dataField="states_tags" dataSort={ true } width={'1400px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >states_tags</TableHeaderColumn>
            <TableHeaderColumn dataField="states_en" dataSort={ true } width={'1400px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >states_en</TableHeaderColumn>
            <TableHeaderColumn dataField="main_category" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >main_category</TableHeaderColumn>
            <TableHeaderColumn dataField="main_category_en" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >main_category_en</TableHeaderColumn>
            <TableHeaderColumn dataField="energy_100g" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >energy_100g</TableHeaderColumn>
            <TableHeaderColumn dataField="energy-from-fat_100g" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >energy-from-fat_100g</TableHeaderColumn>
            <TableHeaderColumn dataField="fat_100g" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >fat_100g</TableHeaderColumn>
            <TableHeaderColumn dataField="saturated-fat_100g" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >saturated-fat_100g</TableHeaderColumn>
            <TableHeaderColumn dataField="-butyric-acid_100g" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >-butyric-acid_100g</TableHeaderColumn>
            <TableHeaderColumn dataField="-caproic-acid_100g" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >-caproic-acid_100g</TableHeaderColumn>
            <TableHeaderColumn dataField="-caprylic-acid_100g" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >-caprylic-acid_100g</TableHeaderColumn>
            <TableHeaderColumn dataField="-capric-acid_100g" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >-capric-acid_100g</TableHeaderColumn>
            <TableHeaderColumn dataField="-lauric-acid_100g" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >-lauric-acid_100g</TableHeaderColumn>
            <TableHeaderColumn dataField="-myristic-acid_100g" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >-myristic-acid_100g</TableHeaderColumn>
            <TableHeaderColumn dataField="-palmitic-acid_100g" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >-palmitic-acid_100g</TableHeaderColumn>
            <TableHeaderColumn dataField="-stearic-acid_100g" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >-stearic-acid_100g</TableHeaderColumn>
            <TableHeaderColumn dataField="-arachidic-acid_100g" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >-arachidic-acid_100g</TableHeaderColumn>
            <TableHeaderColumn dataField="-behenic-acid_100g" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >-behenic-acid_100g</TableHeaderColumn>
            <TableHeaderColumn dataField="-lignoceric-acid_100g" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >-lignoceric-acid_100g</TableHeaderColumn>
            <TableHeaderColumn dataField="-cerotic-acid_100g" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >-cerotic-acid_100g</TableHeaderColumn>
            <TableHeaderColumn dataField="-montanic-acid_100g" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >-montanic-acid_100g</TableHeaderColumn>
            <TableHeaderColumn dataField="-melissic-acid_100g" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >-melissic-acid_100g</TableHeaderColumn>
            <TableHeaderColumn dataField="monounsaturated-fat_100g" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >monounsaturated-fat_100g</TableHeaderColumn>
            <TableHeaderColumn dataField="polyunsaturated-fat_100g" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >polyunsaturated-fat_100g</TableHeaderColumn>
            <TableHeaderColumn dataField="omega-3-fat_100g" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >omega-3-fat_100g</TableHeaderColumn>
            <TableHeaderColumn dataField="-alpha-linolenic-acid_100g" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >-alpha-linolenic-acid_100g</TableHeaderColumn>
            <TableHeaderColumn dataField="-eicosapentaenoic-acid_100g" dataSort={ true } width={'250px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >-eicosapentaenoic-acid_100g</TableHeaderColumn>
            <TableHeaderColumn dataField="-docosahexaenoic-acid_100g" dataSort={ true } width={'250px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >-docosahexaenoic-acid_100g</TableHeaderColumn>
            <TableHeaderColumn dataField="omega-6-fat_100g" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >omega-6-fat_100g</TableHeaderColumn>
            <TableHeaderColumn dataField="-linoleic-acid_100g" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >-linoleic-acid_100g</TableHeaderColumn>
            <TableHeaderColumn dataField="-arachidonic-acid_100g" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >-arachidonic-acid_100g</TableHeaderColumn>
            <TableHeaderColumn dataField="-gamma-linolenic-acid_100g" dataSort={ true } width={'280px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >-gamma-linolenic-acid_100g</TableHeaderColumn>
            <TableHeaderColumn dataField="-dihomo-gamma-linolenic-acid_100g" dataSort={ true } width={'280px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >-dihomo-gamma-linolenic-acid_100g</TableHeaderColumn>
            <TableHeaderColumn dataField="omega-9-fat_100g" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >omega-9-fat_100g</TableHeaderColumn>
            <TableHeaderColumn dataField="-oleic-acid_100g" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >-oleic-acid_100g</TableHeaderColumn>
            <TableHeaderColumn dataField="-elaidic-acid_100g" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >-elaidic-acid_100g</TableHeaderColumn>
            <TableHeaderColumn dataField="-gondoic-acid_100g" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >-gondoic-acid_100g</TableHeaderColumn>
            <TableHeaderColumn dataField="-mead-acid_100g" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >-mead-acid_100g</TableHeaderColumn>
            <TableHeaderColumn dataField="-erucic-acid_100g" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >-erucic-acid_100g</TableHeaderColumn>
            <TableHeaderColumn dataField="-nervonic-acid_100g" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >-nervonic-acid_100g</TableHeaderColumn>
            <TableHeaderColumn dataField="trans-fat_100g" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >trans-fat_100g</TableHeaderColumn>
            <TableHeaderColumn dataField="cholesterol_100g" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >cholesterol_100g</TableHeaderColumn>
            <TableHeaderColumn dataField="carbohydrates_100g" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >carbohydrates_100g</TableHeaderColumn>
            <TableHeaderColumn dataField="sugars_100g" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >sugars_100g</TableHeaderColumn>
            <TableHeaderColumn dataField="-sucrose_100g" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >-sucrose_100g</TableHeaderColumn>
            <TableHeaderColumn dataField="-glucose_100g" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >-glucose_100g</TableHeaderColumn>
            <TableHeaderColumn dataField="-fructose_100g" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >-fructose_100g</TableHeaderColumn>
            <TableHeaderColumn dataField="-lactose_100g" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >-lactose_100g</TableHeaderColumn>
            <TableHeaderColumn dataField="-maltose_100g" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >-maltose_100g</TableHeaderColumn>
            <TableHeaderColumn dataField="-maltodextrins_100g" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >-maltodextrins_100g</TableHeaderColumn>
            <TableHeaderColumn dataField="starch_100g" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >starch_100g</TableHeaderColumn>
            <TableHeaderColumn dataField="polyols_100g" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >polyols_100g</TableHeaderColumn>
            <TableHeaderColumn dataField="fiber_100g" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >fiber_100g</TableHeaderColumn>
            <TableHeaderColumn dataField="proteins_100g" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >proteins_100g</TableHeaderColumn>
            <TableHeaderColumn dataField="casein_100g" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >casein_100g</TableHeaderColumn>
            <TableHeaderColumn dataField="serum-proteins_100g" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >serum-proteins_100g</TableHeaderColumn>
            <TableHeaderColumn dataField="nucleotides_100g" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >nucleotides_100g</TableHeaderColumn>
            <TableHeaderColumn dataField="salt_100g" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >salt_100g</TableHeaderColumn>
            <TableHeaderColumn dataField="sodium_100g" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >sodium_100g</TableHeaderColumn>
            <TableHeaderColumn dataField="alcohol_100g" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >alcohol_100g</TableHeaderColumn>
            <TableHeaderColumn dataField="vitamin-a_100g" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >vitamin-a_100g</TableHeaderColumn>
            <TableHeaderColumn dataField="beta-carotene_100g" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >beta-carotene_100g</TableHeaderColumn>
            <TableHeaderColumn dataField="vitamin-d_100g" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >vitamin-d_100g</TableHeaderColumn>
            <TableHeaderColumn dataField="vitamin-e_100g" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >vitamin-e_100g</TableHeaderColumn>
            <TableHeaderColumn dataField="vitamin-k_100g" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >vitamin-k_100g</TableHeaderColumn>
            <TableHeaderColumn dataField="vitamin-c_100g" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >vitamin-c_100g</TableHeaderColumn>
            <TableHeaderColumn dataField="vitamin-b1_100g" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >vitamin-b1_100g</TableHeaderColumn>
            <TableHeaderColumn dataField="vitamin-b2_100g" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >vitamin-b2_100g</TableHeaderColumn>
            <TableHeaderColumn dataField="vitamin-pp_100g" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >vitamin-pp_100g</TableHeaderColumn>
            <TableHeaderColumn dataField="vitamin-b6_100g" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >vitamin-b6_100g</TableHeaderColumn>
            <TableHeaderColumn dataField="vitamin-b9_100g" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >vitamin-b9_100g</TableHeaderColumn>
            <TableHeaderColumn dataField="folates_100g" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >folates_100g</TableHeaderColumn>
            <TableHeaderColumn dataField="vitamin-b12_100g" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >vitamin-b12_100g</TableHeaderColumn>
            <TableHeaderColumn dataField="biotin_100g" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >biotin_100g</TableHeaderColumn>
            <TableHeaderColumn dataField="pantothenic-acid_100g" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >pantothenic-acid_100g</TableHeaderColumn>
            <TableHeaderColumn dataField="silica_100g" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >silica_100g</TableHeaderColumn>
            <TableHeaderColumn dataField="bicarbonate_100g" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >bicarbonate_100g</TableHeaderColumn>
            <TableHeaderColumn dataField="potassium_100g" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >potassium_100g</TableHeaderColumn>
            <TableHeaderColumn dataField="chloride_100g" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >chloride_100g</TableHeaderColumn>
            <TableHeaderColumn dataField="calcium_100g" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >calcium_100g</TableHeaderColumn>
            <TableHeaderColumn dataField="phosphorus_100g" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >phosphorus_100g</TableHeaderColumn>
            <TableHeaderColumn dataField="iron_100g" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >iron_100g</TableHeaderColumn>
            <TableHeaderColumn dataField="magnesium_100g" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >magnesium_100g</TableHeaderColumn>
            <TableHeaderColumn dataField="zinc_100g" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >zinc_100g</TableHeaderColumn>
            <TableHeaderColumn dataField="copper_100g" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >copper_100g</TableHeaderColumn>
            <TableHeaderColumn dataField="manganese_100g" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >manganese_100g</TableHeaderColumn>
            <TableHeaderColumn dataField="fluoride_100g" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >fluoride_100g</TableHeaderColumn>
            <TableHeaderColumn dataField="selenium_100g" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >selenium_100g</TableHeaderColumn>
            <TableHeaderColumn dataField="chromium_100g" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >chromium_100g</TableHeaderColumn>
            <TableHeaderColumn dataField="molybdenum_100g" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >molybdenum_100g</TableHeaderColumn>
            <TableHeaderColumn dataField="iodine_100g" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >iodine_100g</TableHeaderColumn>
            <TableHeaderColumn dataField="caffeine_100g" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >caffeine_100g</TableHeaderColumn>
            <TableHeaderColumn dataField="taurine_100g" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >taurine_100g</TableHeaderColumn>
            <TableHeaderColumn dataField="ph_100g" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >ph_100g</TableHeaderColumn>
            <TableHeaderColumn dataField="fruits-vegetables-nuts_100g" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >fruits-vegetables-nuts_100g</TableHeaderColumn>
            <TableHeaderColumn dataField="fruits-vegetables-nuts-dried_100g" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >fruits-vegetables-nuts-dried_100g</TableHeaderColumn>
            <TableHeaderColumn dataField="fruits-vegetables-nuts-estimate_100g" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >fruits-vegetables-nuts-estimate_100g</TableHeaderColumn>
            <TableHeaderColumn dataField="collagen-meat-protein-ratio_100g" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >collagen-meat-protein-ratio_100g</TableHeaderColumn>
            <TableHeaderColumn dataField="cocoa_100g" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >cocoa_100g</TableHeaderColumn>
            <TableHeaderColumn dataField="chlorophyl_100g" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >chlorophyl_100g</TableHeaderColumn>
            <TableHeaderColumn dataField="carbon-footprint_100g" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >carbon-footprint_100g</TableHeaderColumn>
            <TableHeaderColumn dataField="carbon-footprint-from-meat-or-fish_100g" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >carbon-footprint-from-meat-or-fish_100g</TableHeaderColumn>
            <TableHeaderColumn dataField="nutrition-score-fr_100g" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >nutrition-score-fr_100g</TableHeaderColumn>
            <TableHeaderColumn dataField="nutrition-score-uk_100g" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >nutrition-score-uk_100g</TableHeaderColumn>
            <TableHeaderColumn dataField="glycemic-index_100g" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >glycemic-index_100g</TableHeaderColumn>
            <TableHeaderColumn dataField="water-hardness_100g" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >water-hardness_100g</TableHeaderColumn>
            <TableHeaderColumn dataField="choline_100g" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >choline_100g</TableHeaderColumn>
            <TableHeaderColumn dataField="phylloquinone_100g" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >phylloquinone_100g</TableHeaderColumn>
            <TableHeaderColumn dataField="beta-glucan_100g" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >beta-glucan_100g</TableHeaderColumn>
            <TableHeaderColumn dataField="inositol_100g" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >inositol_100g</TableHeaderColumn>
            <TableHeaderColumn dataField="carnitine_100g" dataSort={ true } width={'200px'}  thStyle={ { whiteSpace: 'normal' } }  tdStyle={ { whiteSpace: 'normal' } } >carnitine_100g</TableHeaderColumn>





              </BootstrapTable>
    );
  }
}

