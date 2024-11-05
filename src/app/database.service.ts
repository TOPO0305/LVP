import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private dbInstance: SQLiteObject | null = null; // Inicializa con null

  constructor(private sqlite: SQLite) {
    this.createDatabase();
  }

  private async createDatabase() {
    this.dbInstance = await this.sqlite.create({
      name: 'mydatabase.db',
      location: 'default',
    });
    console.log('Base de datos creada');
  }

  // Ejemplo de método que usa dbInstance
  public async executeQuery(query: string, params: any[] = []): Promise<any> {
    if (!this.dbInstance) {
      throw new Error('Base de datos no inicializada');
    }
    return this.dbInstance.executeSql(query, params);
  }
}
