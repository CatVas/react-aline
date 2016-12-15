import { expect, renderComponent } from '../../test_helper';
import Signup from '../../../src/components/forms/Signup';


describe('Signup', () => {
  describe('Error message under the form', () => {
    let cmp;
    const state = {
      auth: {
        error: 'Bad error'
      },
    };

    beforeEach(() => {
      cmp = renderComponent(Signup, null, state);
    });

    it('shows error message', () => {
      expect(cmp.find('.bg-danger.text-danger')).to.exist;
    });

    it('clears error message at rendering', () => {
      expect(cmp.find('.bg-danger.text-danger').text())
        .to.eql('');
    });
  });
});
