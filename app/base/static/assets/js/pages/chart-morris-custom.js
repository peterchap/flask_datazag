'use strict';
$(document).ready(function () {
    setTimeout(function () {
        // [ bar-horizontal ] chart start
        Morris.Bar({
            element: 'morris-bar-chart',
            data: [{
                y: 'mail.hundredsofbrands.co.uk',
                DELIVERED: 1354091,
                BOUNCED: 102435,
                DEFERRED: 0,
            },
            {
                y: 'email.market-savings.com',
                DELIVERED: 955564,
                BOUNCED: 219915,
                DEFERRED: 0,
            },
            {
                y: 'email.inboxdirect.co.uk',
                DELIVERED: 507422,
                BOUNCED: 0,
                DEFERRED: 0,
            },
            {
                y: 'mail.savingwizard.co.uk',
                DELIVERED: 173508,
                BOUNCED: 60229,
                DEFERRED: 65691,
            },
            {
                y: 'lo4m.esb-3.com',
                DELIVERED: 60936,
                BOUNCED: 0,
                DEFERRED: 0,
            }
            ],
            xkey: 'y',
            barSizeRatio: 0.70,
            barGap: 3,
            resize: true,
            responsive: true,
            ykeys: ['DELIVERED', 'BOUNCED', 'DEFERRED'],
            labels: ['Delivered', 'Bounced', 'Deferred'],
            stacked: true,
            dataLabels: false,
            horizontal: true,
            hideHover: true,
            barColors: ["0-#1de9b6-#1dc4e9", "0-#899FD4-#A389D4", "#04a9f5"]
        });
        // [ bar-simple ] chart end
        // [ bar-simple ] chart start
        Morris.Bar({
            element: 'morris-bar-chart-2',
            data: [{
                y: 'Google',
                BOUNCED: 177261,
            },
            {
                y: 'Apple',
                BOUNCED: 129997,
            },
            {
                y: 'Other',
                BOUNCED: 129704,
            },
            {
                y: 'Virgin',
                BOUNCED: 62966,
            },
            {
                y: 'BT',
                BOUNCED: 57975,
            },
            {
                y: 'Microsoft',
                BOUNCED: 34637,
            },
            {
                y: 'Yahoo',
                BOUNCED: 13832,
            },
            ],
            xkey: 'y',
            resize: true,
            responsive: true,
            ykeys: ['BOUNCED'],
            labels: ['Bounced'],
            dataLabels: false,
            barColors: ["0-#1de9b6-#1dc4e9"]
        });
        // [ bar-simple ] chart end

        // [ bar-stacked ] chart start
        Morris.Bar({
            element: 'morris-bar-stacked-chart',
            data: [{
                'mbp_group': 'Yahoo',
                'BOUNCED': 355,
                'DEFERED': 13826,
                'DELIVERED': 2258341,
                'EXPIRED': 0,
            },
            {
                'mbp_group': 'Other',
                'BOUNCED': 147182,
                'DEFERED': 145444,
                'DELIVERED': 191027,
                'EXPIRED': 922,
            },
            {
                'mbp_group': 'BT',
                'BOUNCED': 58647,
                'DEFERED': 2303,
                'DELIVERED': 177288,
                'EXPIRED': 9263,
            },
            {
                'mbp_group': 'Microsoft',
                'BOUNCED': 5252,
                'DEFERED': 7876,
                'DELIVERED': 222651,
                'EXPIRED': 0,
            },
            {
                'mbp_group': 'Gmail',
                'BOUNCED': 85509,
                'DEFERED': 8759,
                'DELIVERED': 60754,
                'EXPIRED': 70921,
            },
            {
                'mbp_group': 'Apple',
                'BOUNCED': 114963,
                'DEFERED': 15289,
                'DELIVERED': 23811,
                'EXPIRED': 0,
            },
            {
                'mbp_group': 'Virgin',
                'BOUNCED': 141,
                'DEFERED': 62828,
                'DELIVERED': 62889,
                'EXPIRED': 0,
            }
            ],
            xkey: 'mbp_group',
            stacked: true,
            barSizeRatio: 0.50,
            barGap: 3,
            resize: true,
            responsive: true,
            ykeys: ['BOUNCED', 'DEFERED', 'DELIVERED', 'EXPIRED'],
            labels: ['BOUNCED', 'DEFERED', 'DELIVERED', 'EXPIRED'],
            barColors: ["0-#1de9b6-#1dc4e9", "0-#899FD4-#A389D4", "#04a9f5", '#b4becb'],
            dataLabels: false,
        });
        // [ bar-stacked ] chart end

        // [ area-angle-chart ] start 
        Morris.Area({
            element: 'morris-area-chart',
            data: [{
                y: '2006',
                a: 0,
                b: 0
            },
            {
                y: '2007',
                a: 130,
                b: 100
            },
            {
                y: '2008',
                a: 80,
                b: 60
            },
            {
                y: '2009',
                a: 70,
                b: 200
            },
            {
                y: '2010',
                a: 220,
                b: 150
            },
            {
                y: '2011',
                a: 105,
                b: 90
            },
            {
                y: '2012',
                a: 250,
                b: 150
            }
            ],
            xkey: 'y',
            ykeys: ['a', 'b'],
            labels: ['Series A', 'Series B'],
            pointSize: 0,
            fillOpacity: 0.8,
            pointStrokeColors: ['#b4becb', '#A389D4'],
            behaveLikeLine: true,
            gridLineColor: '#e0e0e0',
            lineWidth: 0,
            smooth: false,
            hideHover: 'auto',
            responsive: true,
            lineColors: ['#b4becb', '#A389D4'],
            resize: true
        });
        // [ area-angle-chart ] end

        // [ area-smooth-chart ] start
        Morris.Area({
            element: 'morris-area-curved-chart',
            data: [{
                period: '2010',
                iphone: 0,
                ipad: 0,
                itouch: 0
            }, {
                period: '2011',
                iphone: 50,
                ipad: 15,
                itouch: 5
            }, {
                period: '2012',
                iphone: 20,
                ipad: 50,
                itouch: 65
            }, {
                period: '2013',
                iphone: 60,
                ipad: 12,
                itouch: 7
            }, {
                period: '2014',
                iphone: 30,
                ipad: 20,
                itouch: 120
            }, {
                period: '2015',
                iphone: 25,
                ipad: 80,
                itouch: 40
            }, {
                period: '2016',
                iphone: 10,
                ipad: 10,
                itouch: 10
            }],
            lineColors: ['#A389D4', '#1de9b6', '#04a9f5'],
            xkey: 'period',
            ykeys: ['iphone', 'ipad', 'itouch'],
            labels: ['Site A', 'Site B', 'Site C'],
            pointSize: 0,
            lineWidth: 0,
            resize: true,
            fillOpacity: 0.9,
            responsive: true,
            behaveLikeLine: true,
            gridLineColor: '#d2d2d2',
            hideHover: 'auto'
        });
        // [ area-smooth-chart ] end

        // [ line-angle-chart ] Start
        Morris.Line({
            element: 'morris-line-chart',
            data: [{
                y: '2006',
                a: 20,
                b: 10
            },
            {
                y: '2007',
                a: 55,
                b: 45
            },
            {
                y: '2008',
                a: 45,
                b: 35
            },
            {
                y: '2009',
                a: 75,
                b: 65
            },
            {
                y: '2010',
                a: 50,
                b: 40
            },
            {
                y: '2011',
                a: 75,
                b: 65
            },
            {
                y: '2012',
                a: 100,
                b: 90
            }
            ],
            xkey: 'y',
            redraw: true,
            resize: true,
            smooth: false,
            ykeys: ['a', 'b'],
            hideHover: 'auto',
            dataLabels: true,
            responsive: true,
            labels: ['Series A', 'Series B'],
            lineColors: ['#1de9b6', '#04a9f5']
        });
        // [ line-angle-chart ] end
        // [ line-smooth-chart ] start
        Morris.Line({
            element: 'morris-line-smooth-chart',
            data: [{
                y: '2006',
                a: 100,
                b: 90
            },
            {
                y: '2007',
                a: 75,
                b: 65
            },
            {
                y: '2008',
                a: 50,
                b: 40
            },
            {
                y: '2009',
                a: 75,
                b: 65
            },
            {
                y: '2010',
                a: 50,
                b: 40
            },
            {
                y: '2011',
                a: 75,
                b: 65
            },
            {
                y: '2012',
                a: 100,
                b: 90
            }
            ],
            xkey: 'y',
            redraw: true,
            resize: true,
            ykeys: ['a', 'b'],
            hideHover: 'auto',
            responsive: true,
            labels: ['Series A', 'Series B'],
            lineColors: ['#1de9b6', '#A389D4']
        });
        // [ line-smooth-chart ] end

        // [ Donut-chart ] Start
        Morris.Donut({
            element: 'morris-donut-chart',
            data: [{
                val: 48,
                label: 'Yahoo'
            },
            {
                val: 16,
                label: 'Gmail'
            },
            {
                val: 15,
                label: 'Microsoft'
            },
            {
                val: 7,
                label: 'BT'
            },
            {
                val: 5,
                label: 'Other'
            },
            {
                val: 5,
                label: 'Apple'
            },
            {
                val: 3,
                label: 'Virgin'
            },
            {
                val: 1,
                label: '1&1',
            }
            ],
            donutType: 'pie',
            dataLabels: false,
            dataLabelsPosition: 'inside',
        });
        // [ Donut-chart ] end
    }, 700);
});
