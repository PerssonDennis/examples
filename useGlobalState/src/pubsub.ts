type PubSubCallback = (data: any) => void;

interface PubSubSubscribeOptions {
  emitLatestOnSubscribe?: boolean;
}

interface PubSub {
  emit: (event: string, data: unknown) => void;
  latestEvents: Record<string, unknown>;
  subscribe: (
    event: string,
    callback: PubSubCallback,
    options?: PubSubSubscribeOptions
  ) => void;
  subscribers: Record<string, PubSubCallback[]>;
  unsubscribe: (event: string, callback: PubSubCallback) => void;
}

export const pubSub: PubSub = {
  latestEvents: {},
  subscribers: {},

  subscribe: (event, callback, options = { emitLatestOnSubscribe: true }) => {
    const { emitLatestOnSubscribe } = options;

    if (!pubSub.subscribers[event]) {
      pubSub.subscribers[event] = [];
    }

    pubSub.subscribers[event].push(callback);

    if (
      emitLatestOnSubscribe &&
      Object.prototype.hasOwnProperty.call(pubSub.latestEvents, event)
    ) {
      callback(pubSub.latestEvents[event]);
    }
  },

  unsubscribe: (event, callback) => {
    if (pubSub.subscribers[event]) {
      pubSub.subscribers[event] = pubSub.subscribers[event].filter(
        (cb) => cb !== callback
      );
    }
  },

  emit: (event, data) => {
    if (pubSub.subscribers[event]) {
      pubSub.latestEvents[event] = data;
      pubSub.subscribers[event].forEach((callback) => {
        callback(data);
      });
    }
  }
};
