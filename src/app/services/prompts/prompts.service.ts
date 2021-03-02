import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import BearPrompt from '../../models/BearPrompt';

@Injectable({
  providedIn: 'root'
})
export class PromptsService {

  private dbPath = '/bearPrompts';
  bearPromptsRef: AngularFireList<BearPrompt>;

  constructor(private db: AngularFireDatabase) {
    this.bearPromptsRef = db.list(this.dbPath);
   }

  getAll(): AngularFireList<BearPrompt> {
    return this.bearPromptsRef;
  }

  create(newPrompt: BearPrompt): any {
    return this.bearPromptsRef.push(newPrompt);
  }

  update(key: string, value: any): Promise<void> {
    return this.bearPromptsRef.update(key, value);
  }

  delete(key: string): Promise<void> {
    return this.bearPromptsRef.remove(key);
  }

  deleteAll(): Promise<void> {
    return this.bearPromptsRef.remove();
  }
}
