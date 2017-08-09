import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'typeface-roboto';
// import PropTypes from 'prop-types';
import Button from 'material-ui/Button';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import "../../node_modules/bootstrap/dist/css/bootstrap.css" ;
import Dialog,
 {DialogTitle,DialogContent,DialogContentText,DialogActions,} 
 from "material-ui/Dialog";
import TextField from 'material-ui/TextField';
class ToggleDown extends React.Component {
	render(){
		const isShow = this.props.isShow;
		let ings = this.props.ingredients;
		ings = ings.map((ing,idx)=>(<li key={idx}>{ing}</li>));
		if ( isShow ) {
		return (
			<div className="well row">
			<div className ="col-md-3">
				<Button
				onClick={this.props.handleToggle}>
				{this.props.label}
				</Button>
			</div>
			<div className="col-md-7">
				<ul className="list-inline text-primary">
				{ings}
				</ul>
			</div>
			<div className="col-md-2">
				<Button onClick = {this.props.delete}>
					X
				</Button>
				<Button onClick = {this.props.edit}>
					EDIT
				</Button>
			</div>
			</div>
		);} else {
			return(
			<div className='row well'>
			<Button 
			onClick={this.props.handleToggle}
			>
			{this.props.label}
			</Button>
			</div>
		);}
	}
}
class MyModal extends React.Component {
	constructor(props) {
		super();
		this.state = {
			name : props.name,
			title: props.title,
			ingredients:props.ingredients,
		}

	}
	handleSubmit(e) {
			e.preventDefault(); 
			const name = this.state.name;
			const ingredients = this.state.ingredients;
			const title = this.props.title;
			const index = this.props.index;
			this.props.submit(name,ingredients,title,index);
			this.props.handleCancel();
	}
	render() {
		const isOpen = this.props.isOpen;
		
		return (
			<div>
				<Dialog 
				open = { isOpen }
				onRequestClose = { this.props.close }
				className = 'wider'
				maxWidth = 'md'>
				<DialogTitle
				style = {{
					padding:'20px 200px',
				}}>
					{this.props.title}
				</DialogTitle>
				<form onSubmit = {()=>this.handleSubmit} ref = {form => this.form = form}>
				<DialogContent>
					 <TextField
			          id="recipetName"
			          label="Name"
			          defaultValue={this.props.name}
			          onChange={event => this.setState({ name: event.target.value })}
			          margin="normal"
			        /><br/>
			        <TextField
			          id="ingredients"
			          label="ingredients"
			          defaultValue={this.props.ingredients}
			          fullWidth
			          onChange={event => this.setState({ ingredients: event.target.value })}
			          margin="normal"
			        />
				</DialogContent>
					 
			    <DialogActions>
			    	<Button onClick={this.props.handleCancel}>
			    	Cancel
			    	</Button>
			    	<Button type="submit" onClick = {(e)=>this.handleSubmit(e)}>
			    	Done
			    	</Button>
			    </DialogActions>
				</form>
				</Dialog>

			</div>
		);
		
	}
}
class Recipets extends React.Component {
	constructction(){
		if (localStorage.recipets_local) {
			const local = JSON.parse(localStorage.recipets_local);
			if (local.recipets) {
			 	return {recipets:local.recipets,
				};
			}
		}
		const base = {recipets:[
				{"label":'Pizza',"ingredients":["pepper","water","rice"]},
				{"label":'Burger',"ingredients":["bread","beef","chicken"]},
				{"label":'stir fried rice',"ingredients":["rice","egg"]},
			],
			showList : Array(3).fill(false),
		}
		console.log(base);
		return base;
	}
	constructor() {
		super();
		let con = this.constructction();
		console.log(con);
		this.state = {recipets:con.recipets,showList:Array(con.recipets.length).fill(false),}
		this.handleAdd = this.handleAdd.bind(this);
		this.show = this.show.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
		this.handleEdit = this.handleEdit.bind(this);
		this.handleCancel = this.handleCancel.bind(this);
		this.submit = this.submit.bind(this);

	}
	store() {
		localStorage.recipets_local = JSON.stringify(
			{recipets:this.state.recipets, showList:this.state.showList}
			);
	}
	handleAdd() {
		this.setState({
			modal : (<MyModal
				isOpen = {true}
				handleCancel = {this.handleCancel}
				title = { "ADD"}
				submit = {this.submit}
				index = {null}
				/>)
		});

	}
	handleEdit(idx){
		const recipet = this.state.recipets[idx];
		this.setState({
			modal : (<MyModal
				isOpen = {true}
				handleCancel = {this.handleCancel}
				title = {recipet.label}
				submit = {this.submit}
				name = {recipet.label}
				ingredients = {recipet.ingredients.join(',')}
				index = {idx}
				/>),

		});
	}
	handleDelete(idx) {
		let tempRecipets = this.state.recipets.slice();
		let tempList = this.state.showList.slice();
		tempRecipets.splice(idx,1);
		tempList.splice(idx,1);
		this.setState({recipets:tempRecipets});
		this.setState({showList:tempList});
		let This = this;
		setTimeout(function() {This.store();}, 1000); 
	}
	show(idx) {
		let tempList = Array(this.state.recipets.length).fill(false);
		tempList[idx] = !this.state.showList[idx];
		this.setState({showList :tempList,});
	}
	handleCancel(){
		this.setState({modal:null});
	}
	submit(name,ingredients,title,index) {
		let tempRecipets = this.state.recipets.slice();
		let templist = this.state.showList.slice();
		if (title === "ADD") {
			if (name && ingredients) {
				tempRecipets.push({'label':name,'ingredients':ingredients.split(',')});
				templist.push(false);
				this.setState({recipets:tempRecipets});
				this.setState({showList:templist});
				this.show(this.state.recipets.length);
			} else {
			alert("please input both")
			}
		}
		else {
				const i = index;
				if (name){
					tempRecipets[i].label = name;
				}
				if (ingredients) {
					tempRecipets[i].ingredients = ingredients.split(',');
				}
				this.setState({recipets:tempRecipets});
			}
		let This = this;
		setTimeout(function() {This.store();}, 1000); 
		
		 
	}
	render() {
		let RECIPETS = this.state.recipets;
		let showList = this.state.showList;
		let This = this;
		let recipets = RECIPETS.map(function(recipet,idx) {
			return (<div key={idx}>
			<ToggleDown
			label = {recipet.label}
			ingredients = {recipet.ingredients}
			handleToggle = {()=>This.show(idx)}
			isShow = {showList[idx]}
			delete = {()=>This.handleDelete(idx)}
			edit = {()=>This.handleEdit(idx)}
			/>
			</div>)
		});
		let modal = this.state.modal;
		return ( 
			<div>
			{recipets}
			<div className="well row">
			<Button onClick={this.handleAdd}>
			<strong>Add more here</strong>
			</Button>
			</div>
				{modal}
			</div>
		)
	}
}

ReactDOM.render(
	<Recipets/>,
	document.getElementById('root')
);


