import { expect } from 'chai';
import { shallowMount } from '@vue/test-utils';
import UserPage from '@/views/UserPage.vue';

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message';
    const wrapper = shallowMount(UserPage, {
      propsData: { msg },
    });
    expect(wrapper.text()).to.include(msg);
  });
});
