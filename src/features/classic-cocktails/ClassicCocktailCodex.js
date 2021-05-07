import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { CocktailSearchBox } from '../cocktail/CocktailSearchBox.js';
import { Coctails } from '../cocktail/Coctails.js';
import * as actions from './classic-cocktail-actions.js';

class ClassicCoctailCodex extends React.Component {

    handleOnSearch(filter) {
        this.props.actions.fetchClassicCocktails(filter);
    }

    render() {
        return (
            <div>
                <CocktailSearchBox onSearch={(filter) => this.handleOnSearch(filter)} />
                <Coctails drinks={this.props.drinks} />
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        drinks: state.classicCocktail.drinks
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ClassicCoctailCodex);