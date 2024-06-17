import { app, InvocationContext } from "@azure/functions";

export async function storeuser(queueItem: unknown, context: InvocationContext): Promise<void> {
    context.log('Storage queue function processed work item:', queueItem);
}

app.storageQueue('storeuser', {
    queueName: 'js-queue-items',
    connection: '',
    handler: storeuser
});
