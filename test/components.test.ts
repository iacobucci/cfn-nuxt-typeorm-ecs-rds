import { mount } from '@vue/test-utils';
import { describe, it, expect } from 'vitest';
import CounterWithoutComposable from '~/components/CounterWithoutComposable.vue';
import CounterWithComposable from '~/components/CounterWithIncrementAndDecrement.vue';

describe('CounterWithoutComposable Component', () => {
	it('è renderizzato correttamente', () => {
		const wrapper = mount(CounterWithoutComposable);
		expect(wrapper.text()).toContain('Count: 0');
	});

	it('incrementa il valore quando il bottone Increment è premuto', async () => {
		const wrapper = mount(CounterWithoutComposable);
		await wrapper.find('button:first-of-type').trigger('click'); // Primo button = Increment
		expect(wrapper.text()).toContain('Count: 1');
	});

	it('decrementa il valore quando il bottone Decrement è premuto', async () => {
		const wrapper = mount(CounterWithoutComposable);
		await wrapper.find('button:last-of-type').trigger('click'); // Secondo button = Decrement
		expect(wrapper.text()).toContain('Count: -1');
	});
});

describe('CounterWithComposable Component', () => {
	it('è renderizzato correttamente', () => {
		const wrapper = mount(CounterWithComposable);
		expect(wrapper.text()).toContain('Count: 0');
	});

	it('incrementa il valore quando il bottone Increment è premuto', async () => {
		const wrapper = mount(CounterWithComposable);
		await wrapper.find('button:first-of-type').trigger('click'); // Primo button = Increment
		expect(wrapper.text()).toContain('Count: 1');
	});

	it('decrementa il valore quando il bottone Decrement è premuto', async () => {
		const wrapper = mount(CounterWithComposable);
		await wrapper.find('button:last-of-type').trigger('click'); // Secondo button = Decrement
		expect(wrapper.text()).toContain('Count: -1');
	});
});