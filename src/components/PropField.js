import React from 'react';

const stylesheet = {
  input: {
    display: 'table-cell',
    boxSizing: 'border-box',
    height: '26px',
    width: '100%',
    outline: 'none',
    border: '0px',
    fontSize: '12px',
    padding: '5px',
    color: 'rgb(130, 130, 130)',
  },
  textarea: {
    display: 'table-cell',
    boxSizing: 'border-box',
    verticalAlign: 'middle',
    minHeight: '100px',
    width: '100%',
    outline: 'none',
    border: '0px',
    fontSize: '12px',
    padding: '5px',
    color: 'rgb(130, 130, 130)',
  },
  field: {
    display: 'table-row',
    padding: '5px',
    color: 'rgb(130, 130, 130)',
  },
  label: {
    display: 'table-cell',
    boxSizing: 'border-box',
    paddingRight: '5px',
    textAlign: 'right',
    width: '20px',
    fontSize: '13px',
  },
};

export default class PropField extends React.Component {
  constructor(props) {
    super(props);
    this._onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.props.onChange(this.props.name, e.target.value);
  }

  render() {
    const type = this.props.type;

    if (type === 'func') {
      return null;
    }

    let inputElem = (
      <input
        id={this.props.name}
        style={stylesheet.input}
        value={this.props.value}
        onChange={this._onChange}
      />
    );

    if (type === 'object') {
      inputElem = (
        <textarea
          id={this.props.name}
          style={stylesheet.textarea}
          value={this.props.value}
          onChange={this._onChange}
        />
      );
    }

    return (
      <div style={stylesheet.field}>
        <label htmlFor={this.props.name} style={stylesheet.label}>
          {`${this.props.name}`}
        </label>
        { inputElem }
      </div>
    );
  }
}

PropField.propTypes = {
  name: React.PropTypes.string.isRequired,
  value: React.PropTypes.string.isRequired,
  type: React.PropTypes.string,
  onChange: React.PropTypes.func.isRequired,
};
