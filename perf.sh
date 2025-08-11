echo 1 > /sys/devices/system/cpu/intel_pstate/no_turbo
echo 0 > /proc/sys/kernel/randomize_va_space
echo 1 > /proc/sys/kernel/perf_event_paranoid

for i in /sys/devices/system/cpu/cpu*/cpufreq/scaling_governor
do
  echo performance > $i
done
