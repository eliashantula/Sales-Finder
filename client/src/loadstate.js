export const loadState = () => {
	try {
		const serializedState = localStorage.getItem('initialState');
		if (serializedState === null) {
			return undefined
		}
		console.log(JSON.parse(serializedState))
		return JSON.parse(serializedState)
	} catch(err){
		return undefined;
	}
}

export const saveState = (state) => {
	try {
		const serializedState = JSON.stringify(state)
		console.log(serializedState)
		localStorage.setItem('initialState',serializedState )
	} catch (err)
	{
		
	}
}