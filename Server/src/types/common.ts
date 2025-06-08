export enum Emotion {
    Happiness = 'happiness',
    Sadness = 'sadness',
    Anger = 'anger',
    Fear = 'fear',
    Shame = 'shame',
    Disgust = 'disgust',
};

export interface User {
    name: string,
    emotion: Emotion | null,
}