import {Component} from 'angular2/core';
import {BootFlatDatePicker} from './bootflat-datepicker';


@Component({
    selector: 'app',
    template: `



    	<table>
    	<tr>
    	<td>
    	<div class="row">
		<div class="col-md-12">
			<bootflat-date-picker [options]="myDatePickerOptions" (dateChanged)="onDateChanged1($event)" [selDate]="selectedDate"></bootflat-date-picker>
		</div>
		</div>
		</td>
		
		<td>
		<!--This is how you pass the parameter from parent component to child Component -->
		<div *ngIf="isDateSelected !==null"> 
			<div>
			<header> Morning </header>
			<header> Afternoon </header>
			<header> Evening</header>
			</div>	

			<div>
			<label>10 a.m</label>
			<label>1 p.m.</label>
			<label>5 p.m.</label>
			</div>	
			
			<div>
			<label>11 a.m.</label>
			 <label>2 p.m.</label>
			 <label>7 p.m.</label>
			</div>	
		</div>
		</td>
		</tr>
		</table>
    `,
	directives: [BootFlatDatePicker],
	styles: [`
		label{
			display: inline-block;
			width: 140px;
		}
		input{
			width: 250px;
		}
		header{
			display: inline-block;
			width: 140px;
			font-weight: bold;
		}
	`]
})

export class Schedular {



	// Date Picker //
    private myDatePickerOptions = {
        todayBtnTxt: 'Today',
        dateFormat: 'yyyy-mm-dd',
        firstDayOfWeek: 'mo',
        sunHighlight: true,
        height: '134px',
        width: '300px',

        background: "blue",
        showTextBox: false,
    };

    public isDateSelected=null;
    selectedDate: string = '';

    onDateChanged1(event) {
        console.log('onDateChanged1(): ', event.date, ' - formatted: ', event.formatted, ' - epoc timestamp: ', event.epoc);
        this.newSelectedDate = event.formatted;
        this.isDateSelected= true;
    }
}