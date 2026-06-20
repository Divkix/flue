import { createAgent, createWorkflow, type WorkflowRouteHandler } from '@flue/runtime';
import review from '../skills/review/SKILL.md' with { type: 'skill' };

export const route: WorkflowRouteHandler = async (_c, next) => next();

const agent = createAgent(() => ({ model: 'anthropic/claude-haiku-4-5', skills: [review] }));

export default createWorkflow({
	agent,
	async run({ harness }) {
		const session = await harness.session();
		const response = await session.skill(review);
		return { text: response.text, reference: review.name };
	},
});
