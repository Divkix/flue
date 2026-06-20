import { createAgent, createWorkflow, type WorkflowRouteHandler } from '@flue/runtime';

export const route: WorkflowRouteHandler = async (_c, next) => next();
const agent = createAgent(() => ({ model: false }));
export default createWorkflow({
	agent,
	async run({ log }) {
		log.info('boom workflow about to explode', { reason: 'demo' });
		throw new Error('intentional explosion for the Sentry demo');
	},
});
