export enum EMessageDialogType {
  discard_changes,
  delete_translation_key,
}

type MessageDialogTypes = {
  [key in EMessageDialogType]: {
    type: EMessageDialogType;
    title: string;
    message: string;
    confirmButtonText: string;
    cancelButtonText?: string;
    showCancelButton?: boolean;
  };
};

export const MessageDialogTypes: MessageDialogTypes = {
  [EMessageDialogType.discard_changes]: {
    type: EMessageDialogType.discard_changes,
    title: 'Discard changes',
    message: 'Are you sure you want to discard changes?',
    confirmButtonText: 'Discard',
    cancelButtonText: 'Cancel',
    showCancelButton: true,
  },
  [EMessageDialogType.delete_translation_key]: {
    type: EMessageDialogType.delete_translation_key,
    title: 'Delete translation key',
    message: 'Are you sure you want to delete this translation key? This cannot be undone.',
    confirmButtonText: 'Delete',
    cancelButtonText: 'Cancel',
    showCancelButton: true,
  },
};
