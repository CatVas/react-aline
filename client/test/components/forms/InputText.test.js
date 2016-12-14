import { expect, renderComponent } from '../../test_helper';
import InputText from '../../../src/components/forms/InputText';


describe('InputText', () => {
  describe('Errors processing', () => {
    let cmp;
    const props = {
      input: {},
      meta: { dirty: true, error: 'Bad smth' },
    };

    beforeEach(() => {
      cmp = renderComponent(InputText, props);
    });

    it('shows error messages', () => {
      expect(cmp.find('.help-block')).to.exist;
    });

    it('passes the error message correctly', () => {
      expect(cmp.find('.help-block').text()).to.eql(props.meta.error);
    });

    it('shows no error messages', () => {
      const props = {
        input: {},
        meta: { dirty: false, error: '' },
      };
      const cmp = renderComponent(InputText, props);
      expect(cmp.find('.help-block')).to.not.exist;
    });
  });
});
