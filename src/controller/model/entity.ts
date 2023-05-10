import {DatabaseInterface} from '../tstype';
import {Adapter} from '../../adapter';
import events from 'events';

abstract class Entity extends events.EventEmitter {
    protected static database: DatabaseInterface = null;
    protected static adapter: Adapter = null;

    public static injectDatabase(database: DatabaseInterface): void {
        Entity.database = database;
    }

    public static injectAdapter(adapter: Adapter): void {
        Entity.adapter = adapter;
    }
}

export default Entity;