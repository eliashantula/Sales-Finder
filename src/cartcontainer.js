import React, { Component } from 'react'
import { connect } from 'react-redux'
import { seeCart } from './actions'
import Cart from './cart'
import { removeShopping } from './actions'
import { updateCart } from './actions'
import serialize from "form-serialize";
import { selectIngredients } from './actions'
import { controlChecks } from './actions'
import { clearRecipes } from './actions'



class CartContainer extends Component {
   

    componentDidMount() {
        this.props.seeCart()

    }
    componentWillReceiveProps(nextProps) {
        this.props.seeCart()
    }


    render() {
        const { list, amount, total, removeItem, changeQuantity, checkRecipe, saveChecks, checkedstatus, clearRecipes } = this.props

        return (
            <Cart list ={list} amount={amount} total={total} removal={removeItem} update={changeQuantity} check={checkRecipe} saveCheck={saveChecks} checkedstatus={checkedstatus} clearRecipe={clearRecipes}/>
        )


    }


}


const mapDispatchToProps = (dispatch) => {

    return {
        seeCart: () => {
            dispatch(seeCart());
        },
        removeItem: (e) => {
            e.preventDefault();

            const form = e.target;

            const data = serialize(form, { hash: true });

            dispatch(removeShopping(data))
            form.reset()
        },

        changeQuantity: (e) => {

            const data = e.target.value
            const test = e.target.id



            let changed = { amount: data, product: test }

            dispatch(updateCart(changed))
        },


        checkRecipe: (e) => {

            let ingred = { product: e.target.value, checked: e.target.checked }
            dispatch(selectIngredients(ingred))
        },

        saveChecks: (e) => {

            let saved = { value: e.target.value, check: e.target.checked }

            dispatch(controlChecks(saved))


        },

        clearRecipes: () => {
            console.log("testing")
            dispatch(clearRecipes())

        }
    }


}

const mapStateToProps = (state) => {
    return {
        list: state.list,
        amount: state.amount,
        total: state.total,
        checkedstatus: state.checks
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer)