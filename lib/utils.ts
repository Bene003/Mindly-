import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { subjectsColors, voices } from "@/constants";
import { CreateAssistantDTO } from "@vapi-ai/web/dist/api";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getSubjectColor = (subject: string) => {
  return subjectsColors[subject as keyof typeof subjectsColors];
};

export const configureAssistant = (voice: string, style: string) => {
  // Get the voice configuration from constants
  const voiceConfig = voices[voice as keyof typeof voices];
  
  if (!voiceConfig) {
    throw new Error(`Voice "${voice}" not found in configuration`);
  }

  // Get the voice ID based on the style
  const voiceId = voiceConfig[style as keyof typeof voiceConfig] || voiceConfig.casual;
  
  // Determine the provider and model from the voice config
  const provider = voiceConfig.provider;
  const model = voiceConfig.model;

  // Configure voice settings based on provider
  let voiceSettings: any = {
    provider: provider,
    voiceId: voiceId,
  };

  // Add provider-specific settings
  if (provider === "11labs") {
    voiceSettings = {
      ...voiceSettings,
      stability: 0.4,
      similarityBoost: 0.8,
      speed: 1,
      style: 0.5,
      useSpeakerBoost: true,
    };
  } else if (provider === "cartesia") {
    voiceSettings = {
      ...voiceSettings,
      model: model,
    };
  } else if (provider === "openai") {
    voiceSettings = {
      ...voiceSettings,
      model: model,
    };
  }

  const vapiAssistant: CreateAssistantDTO = {
    name: "Assistant",
    firstMessage: "Salut ! Commençons notre session d'apprentissage. Aujourd'hui, nous allons parler de...",
    transcriber: {
      provider: "deepgram",
      model: "nova-2",
      language: "fr",
    },
    voice: voiceSettings,
    model: {
      provider: "openai",
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: `Tu es un tuteur très compétent qui enseigne lors d'une session vocale en temps réel avec un étudiant. Ton objectif est d'enseigner à l'étudiant le sujet donné.

                    Directives pour le tuteur :
                    Reste sur le sujet donné - {{ topic }} et la matière - {{ subject }} et enseigne à l'étudiant à ce propos.
                    Maintiens la conversation fluide tout en gardant le contrôle.
                    De temps en temps, assure-toi que l'étudiant te suit et te comprend.
                    Divise le sujet en petites parties et enseigne à l'étudiant une partie à la fois.
                    Garde ton style de conversation {{ style }}.
                    Garde tes réponses courtes, comme dans une vraie conversation vocale.
                    N'inclus aucun caractère spécial dans tes réponses - c'est une conversation vocale.
                    Réponds toujours en français et adapte ton langage pour être motivant et accessible aux jeunes apprenants.
              `,
        },
      ],
    },
    clientMessages: [],
    serverMessages: [],
  };
  
  return vapiAssistant;
};