import { expect } from '../test_helper';
import contactMsgReducer, { defaultState } from '../../src/reducers/contactMsgReducer';
import { CONTACT_MSG_RESET, CONTACT_MSG_SET } from '../../src/actions/types';
import { contactMsgResetAfterMs, thanks_well_answer_you_soon
} from '../../src/constants';


describe('contactMsgReducer', () => {
  it('without arguments', () => {
    expect(contactMsgReducer()).to.eql(defaultState);
  });

  it('action CONTACT_MSG_SET', () => {
    const action = {
      payload: {
        resetAfterMs: contactMsgResetAfterMs,
        text: thanks_well_answer_you_soon,
      },
      type: CONTACT_MSG_SET
    };
    const state = contactMsgReducer(defaultState, action);
    expect(state).to.eql({
      resetAfterMs: contactMsgResetAfterMs,
      text: thanks_well_answer_you_soon,
    });
  });

  it('action CONTACT_MSG_RESET', () => {
    const action = { type: CONTACT_MSG_RESET };
    const state = contactMsgReducer({
      resetAfterMs: contactMsgResetAfterMs,
      text: thanks_well_answer_you_soon,
    }, action);
    expect(state).to.eql(defaultState);
  });
});
