import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../redux/actions';
interface StateProps {
    input: string;
}

type Props = { addTodo: typeof addTodo };

class AddTodo extends React.Component<Props, StateProps> {
    state: StateProps = { input: '' };

    updateInput = (input: string) => {
        this.setState({ input });
    };

    handleAddTodo = () => {
        this.props.addTodo(this.state.input);
        this.setState({ input: '' });
    };

    render() {
        return (
            <div>
                <input
                    onChange={(e) => this.updateInput(e.target.value)}
                    value={this.state.input}
                />
                <button className="add-todo" onClick={this.handleAddTodo}>
                    Add Todo
                </button>
            </div>
        );
    }
}

export default connect(null, { addTodo })(AddTodo);
// export default AddTodo;
