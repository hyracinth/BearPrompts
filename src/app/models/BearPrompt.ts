export default class BearPrompt {
    Theme: string;
    SuggestedBy: string;
    SuggestionDate: Date;
    DoddleDate: Date;

    isValid() {
      if(this.Theme == null || this.SuggestedBy == null || this.SuggestionDate == null || this.DoddleDate == null) {
        return false;
      }
      return true;
    }
  }
  