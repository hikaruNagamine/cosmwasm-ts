import * as cosmwasmclient from './module';
import Long from 'long';
import * as $protobuf from 'protobufjs/minimal';

$protobuf.util.Long = Long;
$protobuf.configure();

export default cosmwasmclient;
