import React, {useEffect, useMemo} from 'react';

const Temp = React.memo((props) => {
    console.log(props.val);
    return(<div>{props.val}</div>)
})

export class TempMemo extends React.Component {
    state = {
        val : 1
    }

    componentDidMount() {
        setInterval( () => {
            this.setState({
                val:1
            })
        })
    }
    render() {
        return (
            <div>
                <Temp val={this.state.val}/>
            </div>
        )
    }

}

// React memo does shallow copy
// useMemo Hook --> if props or state doesnot change then child component should not rendered
// useRef hook allow to access particular html elemnt