/**
 * Created by Maxim on 27/10/2014.
 */
var mongoose = require('mongoose')
    , Schema = mongoose.Schema;

var ActiviteitSchema = new Schema({
    beschrijving: {type: String},
    contact: {type: Schema.ObjectId, ref: "GebruikerSchema"},
    eindDatum: {type: Date},
    locatie: {type: String},
    naam: {type: String},
    startDatum: {type: Date},
    comments: [{type: Schema.ObjectId, ref: "CommentSchema"}],
    createdOn: {type: Date, Default: Date.now}
});

ActiviteitSchema.path('beschrijving').required(true, 'Beschrijving mag niet null zijn');
ActiviteitSchema.path('contact').required(true, 'Contact mag niet null zijn');
ActiviteitSchema.path('eindDatum').required(true, 'Einddatum mag niet leeg zijn');
ActiviteitSchema.path('locatie').required(true, 'Locatie mag niet leeg zijn');
ActiviteitSchema.path('naam').required(true, 'Naam mag niet leeg zijn');
ActiviteitSchema.path('startDatum').required(true, 'Startdatum mag niet leeg zijn');
ActiviteitSchema.path('createdOn').required(true, 'CreateOn mag niet leeg zijn');

module.exports = mongoose.model('Activiteit', ActiviteitSchema);