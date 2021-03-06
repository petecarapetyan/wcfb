import {LitElement} from 'lit';
import { connect } from '@captaincodeman/rdx'
import { store } from '../state'

export class Connected extends connect(store, LitElement) {}
export * from '../state'