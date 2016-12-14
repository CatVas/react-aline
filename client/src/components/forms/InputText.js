/** This component must be wrapped in Field component from reduxForm.
 * @param {String} type - the type of a text input;
*/
import React from 'react';


const InputText = props => {
  const {
    input: { name, onChange, value },
    meta: { dirty, error },
    placeholder,
    type,
  } = props;

  const classNameForAll = `form-group ${dirty && error ? 'has-error' : ''}`;
  const Element = (type === 'textarea') ? 'textarea' : 'input';
  const errorMsg = dirty && error
    ? <span className="help-block">{error}</span>
    : '';

  return (
    <div className={classNameForAll}>
      <Element
        className="form-control"
        name={name}
        onChange={onChange}
        placeholder={placeholder || ''}
        type={type || 'text'}
        value={value}
      />
      {errorMsg}
    </div>
  );
}

export default InputText;
