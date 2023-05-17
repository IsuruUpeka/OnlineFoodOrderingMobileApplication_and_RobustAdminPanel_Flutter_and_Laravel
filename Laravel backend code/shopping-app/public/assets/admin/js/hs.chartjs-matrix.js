/*
* Chart.js wrapper
* @version: 2.0.0 (Mon, 25 Nov 2019)
* @requires: jQuery v3.0 or later, Chart.js v2.8.0
* @author: HtmlStream
* @event-namespace: .HSCore.components.HSValidation
* @license: Htmlstream Libraries (https://htmlstream.com/licenses)
* Copyright 2020 Htmlstream
*/
;(function ($) {
  'use strict';

  $.HSCore.components.HSChartMatrixJS = {
    defaults: {
      type: 'matrix',
      options: {
        animation: {
          duration: 0
        },
        responsive: true,
        maintainAspectRatio: false,
        legend: {
          display: false
        },
        tooltips: {
          enabled: false,
          mode: 'nearest'
        },
        gradientPosition: {
          x0: 0,
          y0: 0,
          x1: 0,
          y1: 0,
        }
      }
    },

    init: function (el, options) {
      if (!el.length) return;

      var context = this,
        defaults = Object.assign({}, context.defaults),
        dataSettings = el.attr('data-hs-chartjs-options') ? JSON.parse(el.attr('data-hs-chartjs-options')) : {},
        settings = {};
      settings = $.extend(true, dataSettings.type, defaults);
      settings = $.extend(true, settings, {
        options: {
          tooltips: {
            custom: function (tooltipModel) {
              // Tooltip Element
              var tooltipEl = document.getElementById('chartjsTooltip');

              // Create element on first render
              if (!tooltipEl) {
                tooltipEl = document.createElement('div');
                tooltipEl.id = 'chartjsTooltip';
                tooltipEl.style.opacity = 0;
                tooltipEl.classList.add('hs-chartjs-tooltip-wrap');
                tooltipEl.classList.add('hs-chartjs-tooltip-matrix');
                tooltipEl.innerHTML = '<div class="hs-chartjs-tooltip"></div>';
                document.body.appendChild(tooltipEl);
              }

              // Hide if no tooltip
              if (settings.type !== 'matrix' && tooltipModel.opacity === 0) {
                tooltipEl.style.opacity = 0;

                tooltipEl.remove()

                return;
              }

              // Set caret Position
              tooltipEl.classList.remove('above', 'below', 'no-transform');
              if (tooltipModel.yAlign) {
                tooltipEl.classList.add(tooltipModel.yAlign);
              } else {
                tooltipEl.classList.add('no-transform');
              }

              function getBody(bodyItem) {
                return bodyItem.lines;
              }

              // Set Text
              if (tooltipModel.body) {
                var titleLines = tooltipModel.title || [],
                  bodyLines = tooltipModel.body.map(getBody),
                  today = new Date();

                var innerHtml = '<header class="hs-chartjs-tooltip-header">';

                titleLines.forEach(function (title) {
                  innerHtml += title + ', ' + today.getFullYear();
                });

                innerHtml += '</header><div class="hs-chartjs-tooltip-body">';

                bodyLines.forEach(function (body, i) {
                  innerHtml += '<div>'

                  var oldBody = body[0],
                    newBody = oldBody,
                    color = tooltipModel.labelColors[i].backgroundColor instanceof Object ? tooltipModel.labelColors[i].borderColor : tooltipModel.labelColors[i].backgroundColor;

                  innerHtml += (settings.options.tooltips.hasIndicator ? '<span class="d-inline-block rounded-circle mr-1" style="width: ' + settings.options.tooltips.indicatorWidth + '; height: ' + settings.options.tooltips.indicatorHeight + '; background-color: ' + color + '"></span>' : '') + (oldBody.length > 3 ? newBody : body);

                  innerHtml += '</div>'
                });

                innerHtml += '</div>';

                var tooltipRoot = tooltipEl.querySelector('.hs-chartjs-tooltip');
                tooltipRoot.innerHTML = innerHtml;
              }

              // `this` will be the overall tooltip
              var position = this._chart.canvas.getBoundingClientRect();

              // Display, position, and set styles for font
              tooltipEl.style.opacity = 1;
              tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX - (tooltipEl.offsetWidth / 2) - 3 + 'px';
              tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY - tooltipEl.offsetHeight - 25 + 'px';
              tooltipEl.style.pointerEvents = 'none';
              tooltipEl.style.transition = settings.options.tooltips.transition;
            }
          }
        }
      }, dataSettings, settings, options);

      if (settings.options.hasOwnProperty('matrixBackgroundColor')) {
        settings.data.datasets.forEach(function(datasets) {
          datasets.backgroundColor = function(ctx) {
            var value = ctx.dataset.data[ctx.dataIndex].v;
            var additionToValue = settings.options.matrixBackgroundColor.hasOwnProperty('additionToValue') ? settings.options.matrixBackgroundColor.additionToValue : 5;
            var alpha = (additionToValue + value) / settings.options.matrixBackgroundColor.accent;

            if (value.toFixed() == 0 && settings.options.matrixBackgroundColor.hasOwnProperty('nullColor')) {
              return Color(settings.options.matrixBackgroundColor.nullColor).rgbString();
            } else {
              return Color(settings.options.matrixBackgroundColor.color).alpha(alpha).rgbString();
            }
          };
        })
      }

      if (settings.options.hasOwnProperty('matrixLegend')) {
        var min = settings.data.datasets[0].data[0].v;
        var max = settings.data.datasets[0].data[0].v;

        for (var i = 1; i < settings.data.datasets[0].data.length; i++) {
          if (settings.data.datasets[0].data[i].v < min) min = settings.data.datasets[0].data[i].v;
          if (settings.data.datasets[0].data[i].v > max) max = settings.data.datasets[0].data[i].v;
        }

        min = min.toFixed();
        max = max.toFixed();

        var html = [],
          stepSize = settings.options.matrixLegend.hasOwnProperty('stepSize') ? settings.options.matrixLegend.stepSize : (max / 10),
          additionToValue = settings.options.matrixBackgroundColor.hasOwnProperty('additionToValue') ? settings.options.matrixBackgroundColor.additionToValue : 5;

        $(settings.options.matrixLegend.container).addClass('hs-chartjs-matrix-legend')

        $(settings.options.matrixLegend.container).append('<li class="hs-chartjs-matrix-legend-min">' + min + '</li>')

        for (var i = 0; i < max;) {
          var value = i;
          var alpha = (additionToValue + value) / settings.options.matrixBackgroundColor.accent;
          html.push('<li class="hs-chartjs-matrix-legend-item" style="background-color: ' + Color(settings.options.matrixBackgroundColor.color).alpha(alpha).rgbString() + '"></li>');

          i = i + stepSize;
        }

        $(settings.options.matrixLegend.container).append(html)

        if (settings.options.matrixLegend.metric && max > 100) {
          if (max < 1000000) {
            max = max / 1000 + 'k';
          } else {
            max = max / 1000000 + 'kk';
          }
        }

        $(settings.options.matrixLegend.container).append('<li class="hs-chartjs-matrix-legend-max">' + max + '</li>')
      }

      window.addEventListener('mousemove', function (e) {
        if (!$(e.target).hasClass('chartjs-render-monitor')) {
          $('.hs-chartjs-tooltip-matrix').remove()
        }
      });

      /* Start : Init */

      var newChartJS = new Chart(el, settings);

      /* End : Init */

      return newChartJS;
    }
  };

})(jQuery);
